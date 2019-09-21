import React, { Component } from "react";

import { QuestionContainer, QuestionContent } from "./StyledComponents";

export default class Question extends Component {
  render() {
    return (
      <QuestionContainer>
        <QuestionContent>{this.props.story}</QuestionContent>
        <QuestionContent>{this.props.question}</QuestionContent>
      </QuestionContainer>
    );
  }
}
