import React from "react";

import "./Learning.css";

export const Learning = () => {
  return (
    <section className="section-learning">
      <h1>Once a student - always a student 👩‍🎓</h1>
      <div className="courses-wrapper">
        <article className="courses-card past">
          <h2>Past</h2>
          <ul className="courses-list">
            <li className="courses-list-item">
              <a href="https://www.coursera.org/specializations/web-design">
                Web Design for Everybody
              </a>
            </li>
            <li className="courses-list-item">
              <a href="https://www.udemy.com/course/the-complete-javascript-course/">
                Complete JS course
              </a>
            </li>
            <li className="courses-list-item">
              <a href="https://www.udemy.com/course/advanced-css-and-sass/">
                Advanced CSS and SASS
              </a>
            </li>
            <li className="courses-list-item">
              <a href="https://www.udemy.com/course/react-for-the-rest-of-us/">
                React for the rest of us
              </a>
            </li>
            <li className="courses-list-item">
              <a href="https://www.youtube.com/watch?v=4UZrsTqkcW4&t=13373s">
                Full React Course 2020
              </a>
            </li>
            <li className="courses-list-item">
              <a href="https://www.udemy.com/course/git-alishev/">Git</a>
            </li>
          </ul>
        </article>
        <article className="courses-card present">
          <h2>Present</h2>
          <ul className="courses-list">
            <li className="courses-list-item">
              <a href="https://www.udemy.com/course/build-an-app-with-react-redux-and-firestore-from-scratch/">
                Build app with React, Redux and Firestore
              </a>
            </li>
            <li className="courses-list-item">
              <a href="https://epicreact.dev/">Epic React</a>
            </li>
          </ul>
        </article>
        <article className="courses-card future">
          <h2>Future</h2>
          <ul className="courses-list">
            <li className="courses-list-item">
              <a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/">
                Node.js, Express, MongoDB & More
              </a>
            </li>
            <li className="courses-list-item">
              <a href="https://www.udemy.com/course/the-complete-vue-js-course/">
                The complete Vue JS course
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
