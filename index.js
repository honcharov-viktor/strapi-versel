const strapi = require("@strapi/strapi");

const serverless = require("serverless-http");

const appDir = process.cwd();

module.exports.handler = async (event, context) => {
  const strapiInstance = strapi.Strapi({ appDir, distDir: appDir });
  await strapiInstance.start();
  const handler = serverless(strapiInstance.app);
  return handler(event, context);
};
