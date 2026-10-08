import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { url } = context;
  
  // Enforce trailing slash for all blog pages
  if (url.pathname.startsWith('/blogs') && !url.pathname.endsWith('/')) {
    const newUrl = new URL(url.toString());
    newUrl.pathname = `${newUrl.pathname}/`;
    return context.redirect(newUrl.toString(), 301);
  }

  return next();
});
