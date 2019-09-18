import React, { Component } from "react";

import Answer from "../Answer/index.js";

import {
  AnswerText,
  AnswerContainerView,
  NextIconImage
} from "./StyleComponents";

export default class AnswerContainer extends Component {
  render() {
    const info = { len: 7, index: [1, 4], alpha: ["A", "B"] };
    return (
      <AnswerContainerView>
        <AnswerText>Answer</AnswerText>
        <Answer textInputInfo={info} />
        <NextIconImage source={require("../../assets/nextIcon.png")} />
      </AnswerContainerView>
    );
  }
}
