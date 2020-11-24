import React, { useEffect, useState } from "react";
import { Carousel, Skeleton } from "antd";
import "./index.css";
import app from "../../firebase config/fb";
import "./InnerCard";
import InnerCard from "./InnerCard";

const DOD = (props) => {
  const [cards, SetCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    app
      .firestore()
      .collection("OfferBag")
      .where("dod", "==", true)
      .onSnapshot((snapshot) => {
        const newCards = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log(newCards);
        SetCard(newCards);
        setLoading(false);
      });
  }, []);
  return (
    <div className="DodCard">
      {loading && <Skeleton active />}
      <Carousel autoplay dotPosition="bottom">
        {cards &&
          cards.map((card) => {
            return <InnerCard data={card} key={card.id} />;
          })}
      </Carousel>
    </div>
  );
};

export default DOD;
