import React, { Component } from "react";

import TextInputItem from "../TextInputItem/index";
import HintBox from "../HintBox/index";

import { AnswerView } from "./StyleComponents";

export default class Answer extends Component {
  refInstanceArray = [];
  onSubmitIndex = index => {
    if (
      index < this.refInstanceArray.length - 1 &&
      this.refInstanceArray[index].current.inputText.length === 1
    ) {
      this.refInstanceArray[index + 1].current.onFocus();
    } else {
      this.refInstanceArray[index].current.onFocus();
    }
  };
  onSubmitIndexForBackspace = index => {
    if (
      this.refInstanceArray[index].current.inputText.length === 1 ||
      index === 0
    ) {
      this.refInstanceArray[index].current.onFocus();
    } else {
      this.refInstanceArray[index - 1].current.onFocus();
    }
  };

  renderDisplay = () => {
    let WordBoxArray = [];
    const { textInputInfo } = this.props;
    let count = 0;
    for (i = 0; i < textInputInfo.len; i++) {
      findedIndex = textInputInfo.index.indexOf(i);
      if (findedIndex === -1) {
        const textInputRef = React.createRef();
        this.refInstanceArray.push(textInputRef);

        k = (
          <TextInputItem
            ref={textInputRef}
            index={count++}
            onSubmitIndex={this.onSubmitIndex}
            key={count}
            onSubmitIndexForBackspace={this.onSubmitIndexForBackspace}
          />
        );
      } else {
        k = (
          <HintBox
            hintText={textInputInfo.alpha[findedIndex]}
            key={count + 20}
          />
        );
      }
      WordBoxArray.push(k);
    }

    return WordBoxArray;
  };

  render() {
    return <AnswerView>{this.renderDisplay()}</AnswerView>;
  }
}
