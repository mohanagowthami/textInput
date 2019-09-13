import React, { Component } from "react";
import { TextInput } from "react-native";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
export default class TextInputItem extends Component {
  refInput = "";
  @observable inputText = this.props.value;

  submit = text => {
    //console.log("t in submit", this.inputText);
    this.inputText = text;
    console.log("t in submit", this.inputText);

    this.props.onSubmitRefAndText(this.refInput, text);
  };
  keyPress = ({ nativeEvent }) => {
    console.log("native event", nativeEvent);
    if (nativeEvent.key === "Backspace") {
      console.log("backspace key");
      console.log("t", this.inputText);
    }
    if (nativeEvent.key === "Backspace" && this.inputText === "") {
      console.log("back space key and empty text");
      this.props.onSubmitRefAndText(this.refInput, "");
    }
  };

  onKeyPress = event => {
    console.log(event);
  };

  renderDisplay = () => {
    return (
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
          color: "blue",
          marginLeft: 20,
          marginBottom: 20
        }}
        ref={this.props.refInput}
        value={this.inputText}
        onChangeText={this.submit}
        testID="box"
        editable={this.props.value === null ? true : false}
        onKeyPress={this.keyPress}
        maxLength={1}
        keyboardType="default"
        autoFocus={this.props.focus}
      />
    );
  };

  render() {
    this.refInput = this.props.refInput;
    return <>{this.renderDisplay()}</>;
  }
}
