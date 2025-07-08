import Image from "next/image";
import getCategoryColor from "../helpers/get-category-color";
import styles from "./style.module.sass";
import fetchBlogs from "../helpers/fetch-blog";
import config from "@/config";

export const dynamicParams = true; // 🔥 اضافه برای حل مشکل

export default async function BlogDetails(props) {
  const params = await props.params;
  const slug = params.slug;

  const blogs = await fetchBlogs(`filters[slug][$eq]=${slug}`);

  if (!blogs.data.length) return <div>Blog not found</div>;

  const blog = blogs.data[0];

  return (
    <div className="container pb-80">
      <div className="row mb-50">
        <div className="col col-9">
          <div
            className={`h6 mb-20 c-${getCategoryColor(
              blog.category || "Technology Trends"
            )}`}
          >
            {blog.category}
          </div>
          <h2>{slug}</h2>
        </div>
      </div>

      <Image
        className={`${styles.feturedImage} mb-50`}
        src={`${config.api}${blog.FeturedImage?.url || ""}`}
        alt="Featured Image"
        width={1280}
        height={387}
      />

      <div className="row">
        <div
          className="col col-9"
          dangerouslySetInnerHTML={{
            __html: blog.Content?.[0]?.children?.[0]?.text || "",
          }}
        />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const blogs = await fetchBlogs();
  return blogs.data.map((blog) => ({ slug: blog.slug }));
}
