import React, { Component } from "react";
import { TextInput } from "react-native";
import { observable } from "mobx";
import { observer } from "mobx-react";
@observer
export default class TextInputItem extends Component {
  refInput = "";
  @observable inputText = this.props.value;
  submit = text => {
    this.inputText = text;
    console.log("refInput in child", this.refInput);
    this.props.onSubmitRef(this.refInput);
  };
  renderDisplay = () => {
    let len = this.props.value === "" ? 2 : 1;
    console.log("len", len);
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
        maxLength={len}
        onChangeText={this.submit}
      ></TextInput>
    );
  };
  render() {
    this.refInput = this.props.refInput;
    return <>{this.renderDisplay()}</>;
  }
}
