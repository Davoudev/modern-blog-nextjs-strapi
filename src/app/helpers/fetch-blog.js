import config from "@/config";

const fetchBlogs = async (params) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: "no-store",
  };
  // const res = await fetch(`${config.api}/api/blogs?populate=*&${params}`, {

  try {
    const res = await fetch(
      `https://modern-blog-strapi-backend.onrender.com/api/blogs?populate=*&${params}`,
      {
        cache: "no-store", // جلوگیری از کش
        next: { revalidate: 0 }, // فقط در سرور استفاده بشه
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
