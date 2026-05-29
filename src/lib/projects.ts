import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export interface ProjectData {
    id: number;
    title: string;
    category: string;
    period: string;
    description: string;
    tags: string[];
    github: string;
    featured: boolean;
    slug: string;
}

export function getAllProjects(): ProjectData[] {
    // If directory doesn't exist, return empty array
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            // Use gray-matter to parse frontmatter metadata
            const { data } = matter(fileContents);

            return {
                id: Number(data.id),
                title: data.title,
                category: data.category,
                period: data.period,
                description: data.description,
                tags: data.tags || [],
                github: data.github,
                featured: data.featured === true || data.featured === "true",
                slug: data.slug || fileName.replace(/\.md$/, ""),
            } as ProjectData;
        });

    // Sort: featured projects first, then by id
    return allProjectsData.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.id - b.id;
    });
}
