import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Ezekiel Sung",
  avatarImage: "avatar.png",
  content:
    "Hello, I am Ezekiel Sung and I am a fresh computer science graduate from the Bay Area. I have experience working in a SCRUM environment, building web applications and machine learning. I love learning new technologies and am eagar to learn. ",
};

const progressData = [
  {
    id: 1,
    title: "Java",
    percantage: 90,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "HTML",
    percantage: 70,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "CSS",
    percantage: 60,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "PHP",
    percantage: 75,
    progressColor: "#FFD15C",
  },
  {
    id: 5,
    title: "Laravel",
    percantage: 75,
    progressColor: "#FF4C60",
  },
  {
    id: 6,
    title: "Jupyter Notebook",
    percantage: 75,
    progressColor: "#6C6CE5",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={"avatar.png"} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a
                      href="https://drive.google.com/file/d/1zb3bU0VcJPtjmICuJH1k2WjsE_WhP9hb/view?usp=sharing"
                      target="_blank"
                      className="btn btn-default"
                    >
                      Download Resume
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing"></div>
      </div>
    </section>
  );
}

export default About;
