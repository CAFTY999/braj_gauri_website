import React, { useState } from "react";
import "./News_2.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const NewsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText =
    "Mumbai: On Monday, 5 December 2011, all the volunteers of Tata Memorial Hospital got together and celebrated the International Volunteer Day. To mark this day, Braj Gauri Trust called all the volunteers, first time, in the Tata Memorial Hospital along with all the staffs of Public Relation Department, to thank and acknowledge their contribution they made to the patients.";

  const fullText =
    shortText +
    " In the true spirit of volunteering, several volunteers of Tata Memorial Hospital also shared their experiences. Many donated blood to the patients. Present were Ms Sadhana Doshi, Mr Bhanjan Mohapatra, Mr Vaman Kadam, and many more including foreign volunteers." +
    " Mr Dev Mohanty, Chairman and founder of Braj Gauri Trust, emphasized that 'Service To Mankind Is Service To God'. The Sr. PRO of Tata Memorial Hospital, Mr S.H. Jafri, praised BGT’s efforts. The event concluded with lunch hosted by BGT and a decision to hold this event annually.";

  return (
    <>
      <Navbar />
      <div className="news-page">
        <header className="news-header">
          <h1>Braj Gauri News</h1>
          <p className="subtitle">
            Stay updated with the latest events and announcements
          </p>
        </header>

        <main className="news-main">
          <div className="news-card">
            <div
              className="news-image"
              style={{
                backgroundImage: `url("/images/new_image.jpg")`,
              }}
            ></div>
            <div className="news-content">
              <h2 className="news-title">
                Braj Gauri Trust Celebrated International Volunteers Day at Tata
                Memorial Hospital
              </h2>
              <p
                className={`news-description ${
                  isExpanded ? "expanded" : "collapsed"
                }`}
              >
                {isExpanded ? fullText : shortText}
              </p>
              <button className="read-more-btn" onClick={toggleReadMore}>
                {isExpanded ? "Read Less ←" : "Read More →"}
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;
