const Strapi = require("@strapi/strapi/dist/Strapi");

const serverless = require("serverless-http");

const appDir = process.cwd();

module.exports.handler = async (event, context) => {
  const strapiInstance = Strapi({ appDir, distDir: appDir });
  await strapiInstance.start();
  const handler = serverless(strapiInstance.app);
  return handler(event, context);
};
