import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface PostData {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
    content?: string;
}

export function getAllPosts(): PostData[] {
    // If directory doesn't exist, return empty array
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            // Use gray-matter to parse frontmatter metadata
            const { data } = matter(fileContents);

            return {
                title: data.title,
                excerpt: data.excerpt,
                date: data.date,
                readTime: data.readTime,
                category: data.category,
                slug: data.slug || fileName.replace(/\.md$/, ""),
            } as PostData;
        });

    // Sort posts by slug/date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert markdown content to dynamic HTML string using marked
    const htmlContent = await marked(content);

    return {
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        readTime: data.readTime,
        category: data.category,
        slug: data.slug || slug,
        content: htmlContent,
    };
}
