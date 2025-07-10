"use client";

import { NavMenu } from "src/components/NavMenu/NavMenu";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <section className="main__introduction">
        <header className="main__header">
          <NavMenu
            className="main__nav-menu"
            optionList={[
              {
                text: "LinkedIn",
                className: "main__nav-menu-btn",
                on_click: () => {
                  window.location.href = "https://www.linkedin.com/in/dmytro-pelyp-385a7b19b/";
                }
              }
            ]}
          />
        </header>
        <div className="main__introduction-content">
          <h2 className="main__introduction-header">Greetings there!</h2>
          <div className="main__introduction-text">
            <p className="main__introduction-text-paragraph">
              My name is Dmyto Pelyp. I am FullStack Developer with over 2 years of actual work
              experience. Ьy skill set includes proficiency in many different technologies, both
              front and back end.
            </p>
            <p className="main__introduction-text-paragraph">
              Beyond technical competence, I bring a fast-learning attitude, self-motivation, and a
              collaborative approach. Eager to contribute my versatile expertise to dynamic and
              innovative teams.
            </p>
          </div>
        </div>
      </section>
      <main></main>
      <footer className="main__footer"></footer>
    </div>
  );
};
