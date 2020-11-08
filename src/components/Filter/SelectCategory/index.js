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
      "Electronics",
      "Mobile",
      "Fashion",
      "TV's and Appliances",
      "Beauty",
      "Furniture",
      "Home essentials",
      "Books",
      "Sports",
    ];
    return (
      <div className="filter-cat-layout">
        <h4>Select Category</h4>
        <div className="filter-cat-grid">
          {categories.map((item) => (
            <Selectables title={item} onSelectCat={this.onSelectCat} />
          ))}
        </div>
      </div>
    );
  }
}
