import React, { Component } from "react";
import { observable } from "mobx-react";
import { TextInput } from "react-native";

export default class TextInputItem extends Component {
  submit = text => {
    const { nextRefValue } = this.props;
    console.log(text);
    if (this.props.nextRefValue != undefined) {
      console.log(this.refs);
      //   this.refs[`${this.props.nextRefValue}`].focus();
      this.refs.two.focus();
    }
  };
  renderDisplay = () => {
    let k = (
      <TextInput
        style={{
          shadowColor: "#000",
          width: 0,
          height: 10,

          shadowOpacity: 0.5,
          shadowRadius: 5,

          elevation: 10,
          width: 100,
          height: 100,
          backgroundColor: "#E8E8E8",
          borderRadius: 20,
          color: "blue"
        }}
        ref={this.props.currentRefValue}
        maxLength={1}
        onChangeText={this.submit}
      ></TextInput>
    );
    console.log("textitem", k);
    return k;
  };
  render() {
    console.log("refvalue", this.props.currentRefValue);
    return <>{this.renderDisplay()}</>;
  }
}
