import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {

    if (context.url.pathname.includes("about") && !context.url.pathname.includes("index.html")) {
        return context.rewrite("/about/index.html");
    }

    return next();
});