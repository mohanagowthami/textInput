import React, { Component } from "react";

import { SingleHintBox, HintText } from "./StyleComponents";

export default class HintBox extends Component {
  render() {
    return (
      <>
        <SingleHintBox>
          <HintText>{this.props.hintText}</HintText>
        </SingleHintBox>
      </>
    );
  }
}
