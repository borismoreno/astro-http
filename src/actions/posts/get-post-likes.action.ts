import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { turso } from "../../turso";

export const getPostLikes = defineAction({
    input: z.string(),
    handler: async (postId) => {

        const { rows } = await turso.execute('SELECT * FROM Clients');
        // const [post] = await db.select().from(Posts).where(eq(Posts.id, postId));

        return {
            likes: rows[0].age,
            exists: true
        }

        // if (!post) {
        //     return {
        //         likes: 0,
        //         exists: false
        //     }
        // }
        // console.log('getPostLikes', {
        //     likes: post.likes,
        //     exists: true
        // });

        // return {
        //     likes: post.likes,
        //     exists: true
        // };
    }
});
