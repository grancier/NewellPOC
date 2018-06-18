import React from "react";

import Child from './Child'
export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
        };
    };

    render() {
        return (
            React.createElement("div", null,
                React.createElement("div", null, " This is the parent. "),
                React.createElement(Child, { name: "child" })
            )
        )
    };
}