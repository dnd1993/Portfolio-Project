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
      </section>
    </>
  );
};
