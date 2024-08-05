import Heading from "@/components/Heading";

import {getPost} from "@/helper/post"
import ShareLinkButton from '@/components/ShareLinkButton'


export async function generateMetadata({params:{slug}}) {
    const post = await getPost(slug)
    return {
        title: post.title,
        description: post.description
    }
}

export default async function SubBlogPage({params:{slug}}) {
    console.log(slug)
    const post = await getPost(slug)
   
    return (
        <>
            <Heading>{post.title}</Heading>
            <div className="flex">
                <ShareLinkButton/>
            </div>
            <img src={post.image} />
            <article dangerouslySetInnerHTML={{ __html: post.html }} className="prose" />

        </>
    )
}