import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Bachelor’s Degree",
    years: "2018 - 2021",
    content:
      "Obtained a B.S. in Computer Science at California State University, Sacramento",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Summer Camp Teacherr",
    years: "Summer 2018",
    content:
      "Planned and taught elementary school kids basic programming skills using iPads.",
  },
  {
    id: 2,
    title: "Junior Varsity/Varsity Badminton Coach",
    years: "2015-2016",
    content:
      "Managed and trained a team of 50 players on the sport of Badminton.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
