import React, { Component } from "react";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        };
    }

    onSelect = () => {
        this.setState({ clicked: !this.state.clicked });
        this.props.onSelectCat(this.props.title);
    };

    render() {
        const clicked = this.state.clicked;

        return (
            <div
                className={
                    clicked ? "filter-cat-selectables filter-background" : "filter-cat-selectables "
                }
                onClick={this.onSelect}
            >
                {this.props.title}
            </div>
        );
    }
}
