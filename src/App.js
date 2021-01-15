import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import "./firebase config/fb";
import app from "firebase";
import { withRouter } from "react-router-dom";
import { Spin } from "antd";

function App({ location }) {
  const [cards, SetCard] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (
      location.state !== undefined &&
      location.state.categories.length !== 0
    ) {
      app
        .firestore()
        .collection("OfferBag")
        .where("category", "in", location.state.categories)
        .onSnapshot((snapshot) => {
          const newCards = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          // console.log(newCards);
          SetCard(newCards);
          setLoading(false);
        });
    } else {
      app
        .firestore()
        .collection("OfferBag")
        .onSnapshot((snapshot) => {
          const newCards = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          // console.log(newCards);
          SetCard(newCards);
          setLoading(false);
        });
    }
  }, [location.state]);

  return (
    <div className="majorDiv">
      <Header />
      <div className="home">
        {loading && <Spin size="large" style={{ marginTop: 20 }} />}
        {cards.map((card, id) => {
          return <Card data={card} />;
        })}
      </div>
    </div>
  );
}

export default withRouter(App);
