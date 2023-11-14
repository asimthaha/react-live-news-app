import axios from "axios";
import React, { useEffect, useState } from "react";

const LiveNewsView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d"
      )
      .then((response) => {
        changeData(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.map((article, index) => (
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 card-group">
            <div className="card mb-3">
              <img
                src={article.urlToImage}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a
                  href={article.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveNewsView;
