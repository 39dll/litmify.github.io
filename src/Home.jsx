import React from "react";
import "./Home.scss";

function Home() {
  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h1 className="title">litmify</h1>
                <h2 className="subtitle">Fi @ SPARCS</h2>
                <p>
                  <b>Mail</b>
                  <br />
                  <a href="mailto://litmify@gmail.com">litmify@gmail.com</a>
                </p>
                <br />
                <p>
                  <b>Github</b>
                  <br />
                  <a href="https://github.com/litmify">@litmify</a>
                </p>
              </div>
              <div className="column">
                <div className="container right-desc">
                  <h2 className="title is-4">Education</h2>
                  <p>
                    <b>
                      <a href="https://kaist.ac.kr/">KAIST</a>
                    </b>
                    <br />
                    Majoring Computer Science (Mar 2019 ~)
                  </p>
                </div>

                <div className="container right-desc">
                  <h2 className="title is-4">Projects</h2>
                  <div>
                    <div>
                      <b>
                        <a href="https://sappir.io/">Sappir</a>
                      </b>
                      <a
                        style={{ marginLeft: "1rem" }}
                        href="https://github.com/litmify/Sappir"
                      >
                        Github
                      </a>
                      <br />
                      Timeline-based scenario & novel writer.
                      <br />
                    </div>

                    <br />

                    <div>
                      <b>
                        <a href="https://overseer.litmify.com/">Overseer</a>
                      </b>
                      <a
                        style={{ marginLeft: "1rem" }}
                        href="https://github.com/litmify/Overseer"
                      >
                        Github
                      </a>
                      <span
                        style={{ marginLeft: "1rem" }}
                        role="img"
                        aria-label="winner"
                      >
                        🏆
                      </span>
                      <br />
                      <b>
                        KOI 2018 - <i>Grand Prix</i>
                      </b>
                      <br />
                      Lightweight version of Overseer-KOI.
                      <br />
                    </div>

                    <br />

                    <div>
                      <b>apply.SPARCS</b>
                      <a
                        style={{ marginLeft: "1rem" }}
                        href="https://github.com/litmify/apply-sparcs"
                      >
                        Github
                      </a>
                      <br />
                      Apply system for <a href="https://sparcs.org">SPARCS</a>.
                      <br />
                    </div>
                  </div>
                </div>

                <div className="container right-desc">
                  <h2 className="title is-4">Experiences</h2>
                  <ul>
                    <li>
                      <b>
                        <a href="https://sparcs.org">SPARCS</a> @ KAIST
                      </b>
                      <br />
                      <ul>
                        <li>
                          <b>President</b> - 2020
                        </li>
                        <li>
                          Member of{" "}
                          <a href="https://newara.sparcs.org">NewARA</a> team -
                          2020: Frontend Developer
                        </li>
                        <li>
                          Contributed to{" "}
                          <a href="https://zabo.sparcs.org">Zabo</a> - 2020
                        </li>
                        <li>Regular Member - 2019 ~</li>
                      </ul>
                    </li>
                  </ul>

                  <br />

                  <div>
                    <b>ScoreBon</b> - 2020
                    <br />
                    React-Native based hybrid application.
                    <br />
                  </div>

                  <br />

                  <div>
                    <b>Apic</b> - 2020
                    <br />
                    React-Native based live camera / filter application.
                    <br />
                  </div>
                </div>

                <div className="container right-desc">
                  <h2 className="title is-4">
                    Honors, Awards and Accomplishments
                  </h2>
                  <ul>
                    <li>
                      <b>Korea Olympiad in Informatics, 2018</b>
                      <br />
                      Overseer - <i>Grand Prix</i>
                    </li>
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
