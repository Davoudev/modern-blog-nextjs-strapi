import Card from "@/components/card/card";
import { IconTypes } from "@/components/button/button";

const Home = () => (
  <div className="container pb-80">
    <Card
      label="Technology Trends"
      title="Discover the Future of Work with AI-Powered Tools"
      summary="Stay ahead of the curve by exploring how artificial intelligence is
            reshaping productivity, collaboration, and innovation in the modern
            workplace."
      href="#"
      btnIcon={IconTypes.ARROW_RIGHT}
      className="mb-30"
    />
    <div className="row">
      <div className="col col-4 m-mw-100">
        <Card
          label="Options"
          title="Discover the Future of Work with AI-Powered Tools"
          href="#"
          btnIcon={IconTypes.ARROW_RIGHT}
          className="mb-30"
        />
      </div>
      <div className="col col-4 m-mw-100">
        <Card
          label="Technology Trends"
          title="Discover the Future of Work with AI-Powered Tools"
          href="#"
          btnIcon={IconTypes.ARROW_RIGHT}
          className="mb-30"
        />
      </div>
      <div className="col col-4 m-mw-100">
        <Card
          label="Travel Guides"
          title="Discover the Future of Work with AI-Powered Tools"
          href="#"
          btnIcon={IconTypes.ARROW_RIGHT}
          className="mb-30"
        />
      </div>
    </div>
  </div>
);

export default Home;
