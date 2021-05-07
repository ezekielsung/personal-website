import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Laravel/Php",
  },
  {
    id: 2,
    text: "Java",
  },
  {
    id: 3,
    text: "art",
  },
  {
    id: 4,
    text: "design",
  },
  {
    id: 5,
    text: "branding",
  },
];

const allData = [
  {
    id: 1,
    title: " DeltaHandPie Internal Server and Mobile Web-App",
    category: "Laravel/Php",
    image: "images/dhp.jpg",
    link: ["https://hungmtruong.github.io/aboutdhpproject/"],
  },
  {
    id: 2,
    title: "Dolphin Attack Game",
    category: "Java",
    image: "images/dolphin-attack-thumb.PNG",
    popupLink: [
      "images/dolphin-attack-1.PNG",
      "images/dolphin-attack-2.PNG",
      "images/dolphin-attack-3.PNG",
      "images/dolphin-attack-4.PNG",
    ],
  },
  {
    id: 3,
    title: "Dessert Falls",
    category: "Java",
    image: "images/characterSelection.png",
    popupLink: [
      "images/characterSelection.png",
      "images/boss-room.png",
      "images/room-with-monsters.png",
    ],
  },
  {
    id: 4,
    title: "Yelp Rating Prediction",
    category: "Machine Learning",
    image: "images/yelp-reviews.png",
    link: ["https://ezekielsung.github.io/yelp-rating-prediction/"],
  },
  {
    id: 5,
    title: "Network Intrusion Detection System",
    category: "Machine Learning",
    image: "images/intrusion.jpg",
    link: ["https://ezekielsung.github.io/Network-Intrusion-Detection-System/"],
  },
  {
    id: 6,
    title: "Image Classification",
    category: "Machine Learning",
    image: "images/classification.jpg",
    link: "https://ezekielsung.github.io/Image-Classification/",
  },
  {
    id: 7,
    title: "N-Queens Problem using Genetic Algorithms",
    category: "Machine Learning",
    image: "images/queens.png",
    link: "https://https://ezekielsung.github.io/N-Queens-Genetic-Algorithms/",
  },
  {
    id: 8,
    title: "NBA All-Stars Prediction",
    category: "Machine Learning",
    image: "images/allstars.jpg",
    link: ["https://ezekielsung.github.io/All-Stars-Prediction/"],
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Projects" />
        {/* Start Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "More coming soon!"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
