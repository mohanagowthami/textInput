import React, { Component } from "react";
import { View } from "react-native";
import { NumberScore, TextScore } from "./StyleComponents";
class Score extends Component {
  render() {
    return (
      <>
        <View>
          <NumberScore>1250</NumberScore>
          <TextScore>your score</TextScore>
        </View>
      </>
    );
  }
}
export default Score;
