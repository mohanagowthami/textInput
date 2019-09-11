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
    return (
      <>
        <Header />
        <Question />
        <Answer refArray={["one", "two", "three", "four", "five"]} />
      </>
    );
  }
}
export default App;
