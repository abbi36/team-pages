module.exports = {

  pages: {
    index: {
      entry: "src/pages/Gallery/main.js",
      template: "public/index.html",
      title: "Gallery",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    details: {
      entry: "src/pages/Details/main.js",
      template: "public/index.html",
      title: "Details",
      chunks: ["chunk-vendors", "chunk-common", "details"],
    },
  },
};
