import Blog from "@/components/Blog";
import { blogs } from "@/store/blogs";

export async function generateStaticParams() {
  const resp = await JSON.stringify(blogs);
  const blogs = await JSON.parse(resp);

  return blogs?.map((blog) => ({
    slug: blog.path.toString(),
  }));
}

export async function generateMetadata({ params: { slug } }) {
  try {
    const data = await JSON.stringify(
      blogs.filter((blog) => blog.path === slug)
    );
    const blog = await JSON.parse(data);

    if (!blog.length) {
      return {
        title: "Not Found!",
        description: "The page you you looking for does not exist!",
      };
    }
    return {
      title: blog[0]?.title,
      description: blog[0]?.desc,
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Not Found!",
      description: "The page you you looking for does not exist!",
    };
  }
}

export default async function BlogPage({ params: { slug } }) {
  return <Blog slug={slug} />;
}
