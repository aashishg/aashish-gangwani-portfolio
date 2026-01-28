const isProd = process.env.NODE_ENV === "production";
 
const nextConfig = {
  basePath: isProd ? "/aashish-gangwani-portfolio" : "",
  assetPrefix: isProd ? "/aashish-gangwani-portfolio/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig;