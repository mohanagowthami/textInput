import React, { Component } from "react";
import { TextInput } from "react-native";
import { blue } from "ansi-colors";
import { observable } from "mobx";
import TextInputItem from "../TextInputItem/index";

export default class Answer extends Component {
  renderDisplay = () => {
    let i;
    let array = [];
    count = 0;

    const refArray = this.props.refArray;
    console.log("refArray", refArray);
    for (i = 0; i < refArray.length; i++) {
      i < refArray.length - 1
        ? (k = (
            <TextInputItem
              currentRefValue={this.props.refArray[i]}
              nextRefValue={this.props.refArray[i + 1]}
              key={count++}
            />
          ))
        : (k = (
            <TextInputItem
              currentRefValue={this.props.refArray[i]}
              key={count++}
            />
          ));
      console.log("k", k);
      array.push(k);
    }
    console.log("array", array);
    return array;
  };

  render() {
    console.log("gow");
    return <>{this.renderDisplay()}</>;
  }
}
