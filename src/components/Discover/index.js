import { ControlOutlined } from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./index.css";
import app from "../../firebase config/fb";
import Card from "../Card";
import { Spin } from "antd";

const Discover = (props) => {
  const [items, setItems] = useState([]);
  const [searching, setSearching] = useState(false);
  const [nothing, setNothing] = useState(false);

  const suffix = (
    <Link to="/filter">
      <ControlOutlined
        style={{
          fontSize: 18,
          color: "#1890ff",
        }}
      />
    </Link>
  );

  useEffect(() => {
    setSearching(true);
    if (props.location) {
      if (
        props.location.state &&
        props.location.state.categories.length !== 0
      ) {
        app
          .firestore()
          .collection("OfferBag")
          .where("category", "in", props.location.state.categories)
          .onSnapshot((snapshot) => {
            const search = snapshot.docs.map((searchValue) => ({
              id: searchValue.id,
              ...searchValue.data(),
            }));
            // console.log(search);
            setItems(search);
            setSearching(false);
            if (search.length === 0) {
              setSearching(false);
              setNothing(true);
            }
          });
      } else setSearching(false);
    }
  }, [props.location]);

  const onSearch = ({ target }) => {
    let { value } = target;
    value = value.toLowerCase();
    // console.log("fetching data", value);
    setItems([]);
    setNothing(false);
    if (value !== "") {
      setSearching(true);
      app
        .firestore()
        .collection("OfferBag")
        .orderBy("category")
        .startAt(value.toLowerCase())
        .endAt(value + "\uf8ff")
        .onSnapshot((snapshot) => {
          const search = snapshot.docs.map((searchValue) => ({
            id: searchValue.id,
            ...searchValue.data(),
          }));
          // console.log(search);
          setItems(search);
          setSearching(false);
          if (search.length === 0) {
            setSearching(false);
            setNothing(true);
          }
        });
    }
  };

  return (
    <div className="DiscoverPage">
      <div className="headerDiv">
        <Search
          className="customSearch"
          placeholder="Search for offers..."
          enterButton="Search"
          size="large"
          allowClear
          suffix={suffix}
          onChange={(e) => onSearch(e)}
        />
      </div>
      <div className="cardContainer">
        {searching && <Spin size="large" style={{ marginTop: 20 }} />}
        {nothing && (
          <p style={{ color: "black", fontSize: 12, fontWeight: "bold" }}>
            Ooops, nothing found according to your search!
          </p>
        )}
        {items &&
          items.map((card) => {
            return <Card data={card} key={card.id} />;
          })}
      </div>
    </div>
  );
};

export default withRouter(Discover);
