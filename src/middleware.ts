import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {

    if (context.url.pathname.includes("about")) {
        console.log(`Request for ${context.url.pathname}`);
        return context.rewrite("/about/index.html");
    }

    return next();
});