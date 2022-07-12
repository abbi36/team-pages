module.exports = {
  pages: {
    index: {
      entry: "src/components/pages/Gallery/main.js",
			template: "public/index.html",
			title: "Gallery",
			chunks: ["chunk-vendors", "chunk-common", "index"],
		},
		details: {
      entry: "src/components/pages/Details/main.js",
			template: "public/index.html",
			title: "Details",
			chunks: ["chunk-vendors", "chunk-common", "about"],
		},
	},
};
