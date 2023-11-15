// index.js
const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');


const PORT = process.env.PORT || 3000;
const PORT_CMS = process.env.PORT_CMS || 1337;
const CMS_SERVICE_URL = `http://localhost:${PORT_CMS}`;
const FRONT_SERVICE_URL = "http://localhost:3000";

const allowedCMSPrifix = ['admin', 'i18n', 'content-manager'];
const allowedCMSRegexp = new RegExp(`/(${allowedCMSPrifix.join('|')})`);

app.use(allowedCMSRegexp, createProxyMiddleware({
    target: CMS_SERVICE_URL,
    changeOrigin: true
}));

app.use('/wp-admin', express.static('build'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app