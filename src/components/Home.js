import "./Home.css";
import MyPhoto from "../img/hiking.jpeg";

export const Home = () => {
  return (
    <>
      <section className="section-main">
        <h1>
          Hey, my name is Yana. I'm a Front-End Developer living in Montreal,
          QC.
        </h1>
        <div className="my-photo-container">
          <img src={MyPhoto} alt="Yana Nazarenko" className="my-photo" />
        </div>
        <article className="about-me">
          <p>
            These unprecedented times gave me the opportunity to switch to the
            sphere I've always been passionate about.
          </p>
          <p>
            I've been a mathematics tutor for many years and it allowed me to
            use and develop my analytical and logical skills on a daily basis
            but it always felt that there was one more step I needed to make.
            And with Web Development I finally started doing something I truly
            enjoy to the full extent.
          </p>
          <p>
            When I don't teach or study, I like doing sports, playing chess,
            hiking (as you can see on a photo above) and meeting new people.
          </p>
        </article>
      </section>
    </>
  );
};
