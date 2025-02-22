import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug) {
    const text = await readFile(`./content/blog/${slug}.md`, 'utf-8')
    const { content, data: { title, image, description } } = matter(text)
    const html = marked(text)

    return { slug,title, image, description,html }
}

export async function getAllPost() {
  
    const slugs = await getSlugs()

    const posts = []

    for(const slug of slugs){
        const post = await getPost(slug)
        posts.push(post)
    }

    return posts
}

export async function getSlugs(slug) {
    const files = await readdir("content/blog")
    return files.filter((file) => file.endsWith('.md')).map((file)=>file.slice(0,-".md".length))
}