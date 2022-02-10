import React, { useState, useEffect } from "react";
import apiHandler from "../api/apiHandler";

function LastComments() {
  const [comments, setComments] = useState([]);

  //   let dataExtracted = [];

  useEffect(async () => {
    try {
      const { data } = await apiHandler.get("/api/comments/lastComments");
      console.log("data for comments ", data);
      //   dataExtracted = data;
      //   const dataExtraction = data;
      //   dataExtracted = dataExtraction;
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  //   console.log("dataExtracted ", dataExtracted);

  //   if (!Array.isArray(comments)) {
  //     return null;
  //   }

  //   if (!comments) return <p>Loading...</p>;
  //   if (!(comments[9]?.film || comments[9]?.author)) return <p>Loading...</p>;
  if (!Array.isArray(comments) || comments.length <= 0) {
    return <p>Loading... </p>;
  }

  return (
    <>
      <div> ON EST LA !</div>

      <section className="last-released">
        <h2>Last comments on films:</h2>
        {comments.map((comment) => {
          //   if (!(comment.film && comment.author)) return <p>Loading...</p>;
          //   if (
          //     !comments[comments.length - 1].film ||
          //     !comments[comments.length - 1].author
          //   ) {
          //     return <p>Loading... </p>;
          //   }

          return (
            <div key={comment._id} className="comment">
              <div className="image-author">
                {/* <img
                src={comment.picture}
                width="300"
                alt="travel image"
                className="image"
              /> */}
              </div>
              <div className="comment-infos">
                "{comment.content}" at {comment.date} on {comment.film.name} by_
                {comment.author.name}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default LastComments;
