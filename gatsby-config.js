module.exports = {
  siteMetadata: {
    title: "Anonymous",
    description: "Anonymous chat"
  },
  plugins: [
    "gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-emotion",
		"gatsby-plugin-react-helmet",

		{
			resolve: "gatsby-plugin-mdx",
			options: {
				defaultLayouts: {
					default: require.resolve("./src/components/layout.js"),
				},
				gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "posts",
				path: "posts",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "images",
			},
		}
	],
};
