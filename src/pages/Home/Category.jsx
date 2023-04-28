import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  // console.log(categoryNews, id);

  return (
    <div>
      { id && <h2>this is a category {categoryNews.length}</h2>}
      {
        categoryNews.map(news=> <NewsCard
        key={news._id}
        news={news}
        ></NewsCard> )
      }
    </div>
  );
};

export default Category;
