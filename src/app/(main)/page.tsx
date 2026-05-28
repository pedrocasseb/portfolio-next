import { Hero } from "@/components/Hero";
import { LatestPosts } from "@/components/LatestPosts";
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
            <LatestPosts posts={latestPosts} />
        </div>
    );
}
