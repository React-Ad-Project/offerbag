import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import "./firebase config/fb";
import app from "firebase";
import { Link } from "react-router-dom";
import { Spin } from "antd";

function App() {
  const [cards, SetCard] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    app
      .firestore()
      .collection("OfferBag")
      .onSnapshot((snapshot) => {
        const newCards = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(newCards);
        SetCard(newCards);
        setLoading(false);
      });
  }, []);

  console.log(cards);

  return (
    <>
      <Header />
      <div className="home">
        {loading && <Spin size="large" style={{ marginTop: 20 }} />}
        {cards.map((card, id) => {
          return (
            <Link to={"/details"} key={id}>
              <Card data={card} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default App;
