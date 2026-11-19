// src/lib/graphql/queries/categories.ts

export const ALL_CATEGORIES_QUERY = `
	query AllCategories {
		categories(first: 100, where: { hideEmpty: true }) {
			nodes {
				databaseId
				name
				slug
			}
		}
	}
`;
