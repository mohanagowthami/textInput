/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Header from "../../Components/Header/index";
import Question from "../../Components/Question";
import Answer from "../../Components/Answer/index";

class App extends Component {
  render() {
    const info = { len: 7, index: [1, 4], alpha: ["A", "B"] };
    return (
      <>
        <Header />
        <Question />
        <Answer textInputInfo={info} />
      </>
    );
  }
}
export default App;
