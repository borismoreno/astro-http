import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {

    if (context.url.pathname === "/about") {
        console.log(`Request for ${context.url.pathname}`);
        return context.rewrite(new Request("https://main.d19bcy9plmh0zh.amplifyapp.com/blog"));
    }

    return next();
});