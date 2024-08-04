import Heading from "@/components/Heading";
import { readFile } from "fs/promises";
import { marked } from "marked";

export default async function SubBlogPage(params) {
    const text = await readFile('./content/blog/belajar-nextjs.md', 'utf-8')
    const html = marked(text)
    return(
       <>
        <Heading>Belajar Next</Heading>
        <img src="/images/user.png"/>
        <article dangerouslySetInnerHTML={{__html: html}} className="prose"/>
       
       </>
    )
}