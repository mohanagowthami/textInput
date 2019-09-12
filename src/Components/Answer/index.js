import React, { Component } from "react";
import { TextInput } from "react-native";
import { blue } from "ansi-colors";
import { observable } from "mobx";
import TextInputItem from "../TextInputItem/index";
import { View } from "react-native";

export default class Answer extends Component {
  refInstanceArray = [];
  text = "";
  onSubmitText = text => {
    console.log(text);
  };
  onSubmitRef = reference => {
    // this.text = this.text.concat(userText);
    console.log("text", this.text);
    const { textInputInfo } = this.props;
    console.log("in parent", reference);
    index = this.refInstanceArray.indexOf(reference);
    console.log("index", index);
    let shiftFocusIndex = textInputInfo.index.indexOf(index + 1);
    shiftFocusIndex = shiftFocusIndex === -1 ? index + 1 : index + 2;
    console.log("value", this.refInstanceArray[1].current.value);

    if (shiftFocusIndex < textInputInfo.len)
      this.refInstanceArray[shiftFocusIndex].current.focus();
  };

  renderDisplay = () => {
    let count = 0;

    let textInputItemArray = [];
    const { textInputInfo } = this.props;
    for (i = 0; i < textInputInfo.len; i++) {
      const textInputRef = React.createRef();
      this.refInstanceArray.push(textInputRef);
      findedIndex = textInputInfo.index.indexOf(i);

      let k = (
        <TextInputItem
          refInput={textInputRef}
          value={findedIndex === -1 ? "" : textInputInfo.alpha[findedIndex]}
          onSubmitRef={this.onSubmitRef}
          key={count++}
          onSubmitUserText={this.onSubmitText}
        />
      );
      textInputItemArray.push(k);
    }
    console.log("refarray", this.refInstanceArray);

    return textInputItemArray;
  };

  render() {
    return (
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {this.renderDisplay()}
      </View>
    );
  }
}
