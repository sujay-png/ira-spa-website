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
  trailingSlash: 'always',
  output: 'server',
  adapter: vercel(), 
  redirects: {
    '/Contactus/': '/Contactus/Mangalore/',
    // Legacy Page URLs
    '/services/': '/ourservice/',
    '/services/lomi-lomi-massage/': '/ourservice/lomi-lomi-massage/',
    '/about-us/': '/about/',
    '/our-services/': '/ourservice/',
    '/kalaburgi-gulbarga/': '/Contactus/Kalaburgi/',
    '/contact/': '/Contactus/Mangalore/',
    '/body-massage-at-ira-spa/': '/ourservice/body-massage/',
    '/deep-tissue-massage-at-ira-spa/': '/ourservice/body-massage/',
    '/head-massage-benifits/': '/blogs/5-benefits-of-head-massage-therapy/',

    // Legacy Blog URLs
    '/blogs/the-power-of-touch-why-the-ira-signature-therapy-is-truly-unique/':
      '/blogs/ira-signature-therapy-in-mangalore/',
    '/blogs/traditional-thai-therapy-ancient-healing-for-modern-wellness/':
      '/blogs/traditional-thai-massage-the-ancient-healing-technique-for-energy-flow/',
    '/blogs/how-spa-treatments-can-improve-your-skin-health/':
      '/blogs/how-spa-treatments-improve-skin-health/',
    '/blogs/best-spa-treatments-for-relaxation/':
      '/blogs/best-spa-treatments-services-you-must-try/',
    '/blogs/herbal-potli-massage-traditional-healing-technique/':
      '/blogs/herbal-potli-therapy-traditional-healing/',
    '/blogs/health-benefits-of-thai-massage/':
      '/blogs/health-benefits-of-thai-massage-therapy/',
    '/blogs/what-are-the-benefits-of-head-massage/':
      '/blogs/5-benefits-of-head-massage-therapy/',
    '/blogs/how-herbal-therapy-can-improve-overall-health/':
      '/blogs/how-herbal-therapy-improves-health-wellness/',
    '/blogs/how-herbal-therapy-improve-overall-health-wellness/':
      '/blogs/how-herbal-therapy-improves-health-wellness/',
    '/blogs/discover-how-spa-therapy-transforms-your-sleep/':
      '/blogs/how-spa-therapy-improves-sleep-quality/',
    '/blogs/deep-pore-cleansing-reveal-your-skins-natural-glow/':
      '/blogs/how-deep-pore-cleansing-facial-helps-prevent-acne-and-oil-build-up/',
    '/blogs/discover-the-benefits-of-bamboo-therapy-a-natural-path-to-wellness/':
      '/blogs/benefits-of-bamboo-therapy/',
    '/blogs/hot-stone-massage-what-it-is-and-how-it-benefits-your-body-and-mind/':
      '/blogs/hot-stone-massage-benefits-for-muscle-pain-and-stress-relief/',
    '/blogs/health-benefits-of-regular-foot-spa-treatments/':
      '/blogs/health-benefits-of-foot-massage-treatments/',
    '/blogs/what-is-body-polishing-and-why-do-you-need-it/':
      '/blogs/what-is-body-polish-treatment-and-why-do-you-need-it/',
    '/blogs/benefits-of-visiting-a-spa-once-a-month/':
      '/blogs/benefits-of-visiting-a-spa/'
  },
  integrations: [
    icon(), 
    sitemap({
      customPages: await getBlogUrls()
    })
  ]
});
