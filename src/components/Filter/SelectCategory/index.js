import React, { Component } from "react";
import "./index.css";
import Selectables from "./Selectables";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCats: [],
    };
  }

  onSelectCat = (item) => {
    let selected = this.state.selectedCats;

    if (selected.includes(item)) {
      selected = selected.filter((i) => i !== item);
    } else {
      selected.push(item);
    }

    this.setState({ selectedCats: selected });

    this.props.onCategoryUpdate(selected);
  };

  render() {
    const categories = [
      "electronics",
      "mobile",
      "fashion",
      "TV's and Appliances",
      "beauty",
      "furniture",
      "home essentials",
      "books",
      "sports",
    ];
    return (
      <div className="filter-cat-layout">
        <h4>Select Category</h4>
        <div className="filter-cat-grid">
          {categories.map((item, id) => (
            <Selectables title={item} key={id} onSelectCat={this.onSelectCat} />
          ))}
        </div>
      </div>
    );
  }
}
