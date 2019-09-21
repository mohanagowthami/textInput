import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import { ShadowTextInput } from "./StyleComponents";

@observer
export default class TextInputItem extends Component {
  @observable inputText = this.props.value;
  myRef;
  submit = text => {
    this.inputText = text.toUpperCase();
    this.props.onEnterLetter(this.props.index);
  };
  keyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === "Backspace") {
      this.props.onPressBackspace(this.props.index);
    }
  };
  onFocus = () => {
    this.myRef.focus();
  };

  renderDisplay = () => {
    return (
      <ShadowTextInput
        value={this.inputText}
        onChangeText={this.submit}
        onKeyPress={this.keyPress}
        maxLength={1}
        ref={ip => (this.myRef = ip)}
      />
    );
  };

  render() {
    return <>{this.renderDisplay()}</>;
  }
}
