import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; 
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

async function getBlogUrls() {
  try {
    const res = await fetch("https://dashboard.iraspa.in/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            posts(first: 1000) {
              nodes {
                slug
              }
            }
          }
        `
      })
    });
    const json = await res.json();
    return json.data.posts.nodes.map(post => `https://www.iraspa.in/blogs/${post.slug}/`);
  } catch (err) {
    console.error("Failed to fetch blogs for sitemap:", err);
    return [];
  }
}

export default defineConfig({
  site: 'https://www.iraspa.in',
  output: 'server',
  adapter: vercel(), 
  integrations: [
    icon(), 
    sitemap({
      customPages: await getBlogUrls()
    })
  ]
});