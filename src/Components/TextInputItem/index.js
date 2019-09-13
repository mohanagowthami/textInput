import React, { Component } from "react";
import { TextInput } from "react-native";
import { observable } from "mobx";
import { observer } from "mobx-react";

import { ShadowTextInput } from "./StyleComponents";

@observer
export default class TextInputItem extends Component {
  refInput = "";
  @observable inputText = this.props.value;

  submit = text => {
    this.inputText = text;
    this.props.onSubmitRefAndText(this.refInput, text);
  };
  keyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === "Backspace" && this.inputText === "") {
      this.props.onSubmitRefAndText(this.refInput, "");
    }
  };

  renderDisplay = () => {
    return (
      <ShadowTextInput
        ref={this.props.refInput}
        value={this.inputText}
        onChangeText={this.submit}
        editable={this.props.value === null ? true : false}
        onKeyPress={this.keyPress}
        maxLength={1}
      />
    );
  };

  render() {
    this.refInput = this.props.refInput;
    return <>{this.renderDisplay()}</>;
  }
}
