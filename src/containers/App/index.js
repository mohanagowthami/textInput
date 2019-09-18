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
import AnswerContainer from "../../Components/AnswerContainer/index";
class App extends Component {
  render() {
    const story =
      " There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput";
    const question = " what is the word expectations in this context ?";
    return (
      <>
        <Header />
        <Question story={story} question={question} />
        <AnswerContainer />
      </>
    );
  }
}
export default App;
