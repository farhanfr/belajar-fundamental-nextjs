import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";

export default function BlogPage(params) {
    return (
        <>
            <Heading>Blogs</Heading>
            <p>List of post</p>

            <PostCard title="Belajar" description="lorem ipsum" images="/images/user.png"/>
        </>
    )
}