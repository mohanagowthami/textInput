import React, { Component } from "react";
import { BackIconImage } from "./StyleComponents";

export default class BackIcon extends Component {
  render() {
    return (
      <>
        <BackIconImage source={require("../../assets/back-icon.png")} />
      </>
    );
  }
}
