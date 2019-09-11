import CountDown from "react-native-countdown-component";
import React, { Component } from "react";

import { CounterContainer, TimeElapsedText } from "./StyleComponents";

export default class Counter extends Component {
  render() {
    return (
      <CounterContainer>
        <CountDown
          until={15}
          size={25}
          digitTxtStyle={{ color: "black" }}
          timeToShow={["M", "S"]}
          timeLabels={{ m: null, s: null }}
          showSeparator
          digitStyle={{ backgroundColor: "" }}
        />
        <TimeElapsedText> Time Remaining</TimeElapsedText>
      </CounterContainer>
    );
  }
}
