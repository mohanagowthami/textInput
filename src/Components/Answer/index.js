import React, { Component } from "react";

import TextInputItem from "../TextInputItem/index";
import { AnswerView } from "./StyleComponents";

export default class Answer extends Component {
  refInstanceArray = [];
  userEnteredWord = [];
  onSubmitRefAndText = (reference, letter) => {
    index = this.refInstanceArray.indexOf(reference);
    const { textInputInfo } = this.props;
    if (letter === "") {
      if (index === 0) {
        this.refInstanceArray[index].current.focus();
      } else {
        let shiftFocusIndex = textInputInfo.index.indexOf(index - 1);
        shiftFocusIndex =
          this.userEnteredWord[index].length === 0
            ? shiftFocusIndex === -1
              ? index - 1
              : index - 2
            : index;
        if (shiftFocusIndex == index) this.userEnteredWord[index] = "";

        this.refInstanceArray[shiftFocusIndex].current.focus();
      }
    } else {
      this.userEnteredWord[index] = letter;
      let shiftFocusIndex = textInputInfo.index.indexOf(index + 1);
      console.log("shift", shiftFocusIndex);
      if (shiftFocusIndex !== -1)
        this.userEnteredWord[index + 1] = textInputInfo.alpha[shiftFocusIndex];
      shiftFocusIndex = shiftFocusIndex === -1 ? index + 1 : index + 2;
      console.log("sh", shiftFocusIndex);
      shiftFocusIndex < textInputInfo.len
        ? this.refInstanceArray[shiftFocusIndex].current.focus()
        : this.refInstanceArray[0].current.focus();
    }
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
          value={findedIndex === -1 ? null : textInputInfo.alpha[findedIndex]}
          key={count++}
          onSubmitRefAndText={this.onSubmitRefAndText}
        />
      );
      textInputItemArray.push(k);
    }

    return textInputItemArray;
  };
  renderFocus = () => {
    console.log("re", this.refInstanceArray[0]);
    //this.refInstanceArray[0].current.focus();
  };

  render() {
    return (
      <AnswerView>
        {this.renderDisplay()}
        {this.renderFocus()}
      </AnswerView>
    );
  }
}
