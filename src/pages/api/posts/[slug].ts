import type { APIRoute } from "astro";
import { getEntry } from "astro:content";

export const GET: APIRoute = async ({ params, request }) => {

    const { slug } = params;

    if (typeof slug !== 'string') {
        return new Response(
            JSON.stringify({ msg: `Invalid slug` }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
    }

    const post = await getEntry("blog", slug);

    if (!post) {
        return new Response(
            JSON.stringify({ msg: `Post ${slug} not found` }),
            {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
    }

    return new Response(JSON.stringify(post),
        {
            status: 200, headers: { "Content-Type": "application/json" }
        });
};

// export const getStaticPaths = async () => {
//     return [
//         { params: { slug: "first-post" } }
//     ]
// };