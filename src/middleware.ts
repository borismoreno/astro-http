import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {

    if (context.url.pathname === "/about") {
        console.log(`Request for ${context.url.pathname}`);
        return context.rewrite("https://main.d19bcy9plmh0zh.amplifyapp.com/about/index.html");
    }

    return next();
});