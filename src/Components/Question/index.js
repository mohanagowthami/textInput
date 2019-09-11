import React, { Component } from "react";
import {
  QuestionContainer,
  StoryContent,
  QuestionContent
} from "./StyledComponents";

export default class Question extends Component {
  render() {
    return (
      <QuestionContainer>
        <StoryContent>
          There are tons of native UI widgets out there ready to be used in the
          latest apps - some of them are part of the platform, others are
          available as third-party libraries, and still more might be in use in
          your very own portfolio. React Native has several of the most critical
          platform components already wrapped, like ScrollView and TextInput
        </StoryContent>
        <QuestionContent>
          what is the word expectations in this context?
        </QuestionContent>
      </QuestionContainer>
    );
  }
}
