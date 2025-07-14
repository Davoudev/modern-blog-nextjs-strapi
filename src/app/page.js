import fetchBlogs from "@/app/helpers/fetch-blog";
import config from "@/config";
import Card from "@/components/card/card";
import { IconTypes } from "@/components/button/button";

const Home = async () => {
  const [featuredBlogs, blogs] = await Promise.all([
    fetchBlogs(`filters[isFetured][$eq]=true`),
    fetchBlogs(`filters[isFetured][$eq]=false`),
  ]);

  return (
    <div className="container pb-80">
      {featuredBlogs?.data?.map(
        (featuredBlog) => (
          console.log(
            "featured imgSrc =>",
            `${config.api}${featuredBlog.FeturedImage.url}`
          ),
          (
            <Card
              key={featuredBlog.id}
              label={featuredBlog.Category}
              title={featuredBlog.Title}
              summary={featuredBlog.Summary}
              href={`/${featuredBlog.slug}`}
              btnIcon={IconTypes.ARROW_RIGHT}
              imgSrc={`${config.api}${featuredBlog.FeturedImage.url}`}
              imgAlt="Featured Image"
              className="mb-30"
            />
          )
        )
      )}

      <div className="row">
        {blogs?.data?.map(
          (blog) => (
            console.log("blog=>", blog),
            (
              <div className="col col-4 m-mw-100" key={blog.id}>
                <Card
                  label={blog.Category}
                  title={blog.Title}
                  summary={blog.Summary}
                  href={`/${blog.slug}`}
                  btnIcon={IconTypes.ARROW_RIGHT}
                  imgSrc={`${config.api}${blog.attributes?.Thumbnail?.data?.attributes?.url}`}
                  imgAlt="Thumbnail"
                  className="mb-30"
                />
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Home;
