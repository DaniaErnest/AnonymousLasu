import React from "react";
import { Link } from "gatsby"; // to link pages
import Layout from "../components/layout";
import Hero from "../components/hero";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";

export default () => {
	const posts = usePosts();
	return (
		<>
			<Hero />
			<Layout>
				<h2> WE ARE ANONYMOUS</h2>
				{posts.map((post) => (
					<PostPreview key={post.slug} post={post} />
				))}
			</Layout>
		</>
	);
};
