import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import ReadLink from "../components/read-link";
import Chat from "../components/Chat";
import Hero from "../components/hero";

export const query = graphql`
	query ($slug: String!) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				title
				author
			}
			body
		}
	}
`;

const PostTemplate = ({ data: { mdx: post } }) => (
	<>
		<Hero />
		<Layout>
			<div>
				<Chat title={post.frontmatter.title} />
			</div>
		</Layout>
	</>
);

export default PostTemplate;
