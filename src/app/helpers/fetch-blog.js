import config from "@/config";

const fetchBlogs = async (params) => {
  try {
    const res = await fetch(
      `https://modern-blog-strapi-backend.onrender.com/api/blogs?populate=*&${params}`,
      {
        cache: "no-store", // prev catching
        next: { revalidate: 0 },
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Fetch failed with status ${res.status}:`, errorText);
      return { data: [] };
    }
    console.log(res);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return { data: [] };
  }
};

export default fetchBlogs;
// rm -rf node_modules package-lock.json && npm install --force && npm rebuild && npm run build
