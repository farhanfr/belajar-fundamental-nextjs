import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPost } from "@/helper/post";



export default async function BlogPage(params) {
    const posts = await getAllPost()
    console.log(posts)
    return (
        <>
            <Heading>Blogs</Heading>
            <p>List of post</p>
            {
                posts.map((post)=>{
                    return (
                        <PostCard link={"/blog/"+post.slug} title={post.title} description={post.description} images={post.image}/>
                    )
                })
            }
           
        </>
    )
}