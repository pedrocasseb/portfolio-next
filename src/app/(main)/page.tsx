import { Hero } from "@/components/Hero";
import { HomeAbout } from "@/components/HomeAbout";
import { LatestPosts } from "@/components/LatestPosts";
import { HomeProjects } from "@/components/HomeProjects";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
    const posts = getAllPosts();
    const latestPosts = posts.slice(0, 3).map((post, idx) => ({
        id: idx + 1,
        ...post,
    }));

    return (
        <div className="flex flex-col">
            <Hero />
            <HomeAbout />
            <LatestPosts posts={latestPosts} />
            <HomeProjects />
        </div>
    );
}
