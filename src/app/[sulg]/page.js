import Image from "next/image";
import getCategoryColor from "../helpers/get-category-color";
import styles from "./style.module.sass";

const BlogDetails = () => (
  <div className="container pb-80">
    <div className="row mb-50">
      <div className="col col-9">
        <div className={`h6 mb-20 c-${getCategoryColor("Technology Trends")} `}>
          Technology Trends
        </div>
        <h2>
          Technology has transformed the way we live, work, and communicate.
        </h2>
      </div>
    </div>

    <Image
      className={`${styles.feturedImage} mb-50`}
      src="/pexels-lum3n-44775-399161.jpg"
      alt="Fetured Image"
      width="1280"
      height="387"
    />

    <div className="row">
      <div className="col col-9">
        <p>
          Technology has transformed the way we live, work, and communicate.
          From smartphones to artificial intelligence, innovations continue to
          shape our daily lives. With just a few clicks, we can access
          information, connect with others across the globe, and automate
          everyday tasks. As technology evolves, it brings both opportunities
          and challenges that define the future of our world.
        </p>
        <p>
          One major area of growth is healthcare technology. Advanced medical
          equipment, wearable devices, and telemedicine have improved patient
          care and made health services more accessible. Doctors can now
          diagnose and treat illnesses faster, often with the help of AI-powered
          tools that analyze medical data more efficiently than ever before.
        </p>
        <p>
          Another important impact of technology is in education. Digital
          classrooms, e-learning platforms, and interactive tools have made
          education more flexible and inclusive. Students from remote areas can
          now learn from the best teachers online, breaking down traditional
          barriers to knowledge and empowering more people to succeed.
        </p>
      </div>
    </div>
  </div>
);

export default BlogDetails;
