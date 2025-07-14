import fetch from "node-fetch";

const url =
  "https://modern-blog-strapi-backend.onrender.com/api/blogs?populate=*";

fetch(url)
  .then((res) => res.json())
  .then((json) => console.log("✅ Success:", json))
  .catch((err) => console.error("❌ Error:", err));
