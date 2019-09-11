import React, { Component } from "react";
import { Text } from "react-native";

import {
  QuestionsAttemptedContainer,
  AttemptedNumber
} from "./StyledComponents";
export default class QuestionsAttempted extends Component {
  render() {
    return (
      <QuestionsAttemptedContainer>
        <Text> Questions Attempted </Text>
        <AttemptedNumber> {this.props.attemptedQuestions}/30</AttemptedNumber>
      </QuestionsAttemptedContainer>
    );
  }
}
