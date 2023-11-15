const strapi = require("@strapi/strapi");

// const serverless = require("serverless-http");

const appDir = process.cwd();

const strapiInstance = strapi({ appDir, distDir: appDir });
strapiInstance.start();

module.exports = strapiInstance.server;

// module.exports.handler = async (event, context) => {
//   const strapiInstance = strapi.Strapi({ appDir, distDir: appDir });
//   await strapiInstance.start();
//   const handler = serverless(strapiInstance.app);
//   return handler(event, context);
// };

// // index.js
// const express = require('express')
// const app = express()
// const PORT = process.env.PORT || 3000;


// app.get('/home', (req, res) => {
//   res.status(200).json('Welcome, your app is working well');
// })


// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// // Export the Express API
// module.exports = app
