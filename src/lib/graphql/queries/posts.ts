// src/lib/graphql/queries/posts.ts

export const ALL_POSTS_QUERY = `
	query AllPosts {
		posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
			nodes {
				databaseId
				slug
				date
				modified
				title
				excerpt
				author { node { name } }
				featuredImage {
					node {
						sourceUrl
						altText
						mediaDetails {
							sizes {
								name
								sourceUrl
								width
								height
							}
						}
					}
				}
				categories { nodes { databaseId name slug } }
			}
		}
	}
`;

export const SINGLE_POST_QUERY = `
	query SinglePost($slug: ID!) {
		post(id: $slug, idType: SLUG) {
			databaseId
			slug
			date
			modified
			title
			excerpt
			content
			author { node { name } }
			featuredImage {
				node {
					sourceUrl
					altText
					mediaDetails {
						sizes {
							name
							sourceUrl
							width
							height
						}
					}
				}
			}
			categories { nodes { databaseId name slug } }
		}
	}
`;

export const POST_WITH_RELATED_QUERY = `
	query PostWithRelated($slug: ID!) {
		post(id: $slug, idType: SLUG) {
			databaseId
			slug
			date
			modified
			title
			excerpt
			content
			author { node { name } }
			featuredImage {
				node {
					sourceUrl
					altText
				}
			}
			categories { nodes { databaseId name slug } }
		}
		recentPosts: posts(first: 12, where: { orderby: { field: DATE, order: DESC } }) {
			nodes {
				databaseId
				slug
				date
				modified
				title
				excerpt
				featuredImage {
					node {
						sourceUrl
						altText
						mediaDetails {
							sizes {
								name
								sourceUrl
								width
								height
							}
						}
					}
				}
				categories { nodes { databaseId name slug } }
			}
		}
	}
`;
