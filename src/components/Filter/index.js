import React, { Component } from "react";
import { LeftOutlined, CloseOutlined } from "@ant-design/icons";
import "./index.css";
import SelectCategory from "./SelectCategory";
import { Redirect, withRouter } from "react-router";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      redirect: false,
    };
  }

  onCategoryUpdate = (categories) => {
    this.setState({ categories });
  };

  onRatingChange = (rating) => {
    this.setState({ rating });
  };

  onSubmit = () => {
    this.setState({ redirect: true });
  };

  render() {
    return (
      <div className="filter-main-layout">
        <div style={{ padding: 15 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 22,
              alignItems: "center",
            }}
          >
            <LeftOutlined onClick={() => this.props.history.goBack()} />
            <h3>Filter</h3>
            <CloseOutlined />
          </div>
          <div className="filter-inner-flex">
            <SelectCategory onCategoryUpdate={this.onCategoryUpdate} />
          </div>
        </div>
        <div onClick={this.onSubmit} className="filter-apply-button">
          Apply
        </div>
        {this.state.redirect && (
          <Redirect
            to={{
              pathname: "/search",
              state: { categories: this.state.categories },
            }}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Filter);
