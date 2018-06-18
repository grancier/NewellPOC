import React from "react";

export default class Child extends React.Component {
    render() {
        return (
            React.createElement("div", null,
                "and this is the ", React.createElement("b", null, this.props.name), "."
            )
        )
    }
}