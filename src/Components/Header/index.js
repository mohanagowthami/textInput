import React, { Component } from "react";

import Counter from "../Counter/index";
import Score from "../Score/index";
import BackIcon from "../BackIcon/index";

import { BackGround } from "./StyleComponents";
import QuestionsAttempted from "../QuestionsAttempted";

export default class Header extends Component {
  render() {
    return (
      <>
        <BackGround
          colors={["#9E9EFF", "#9DD6EE", "#20B2AA"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <BackIcon />
          <Score />
          <Counter />
          <QuestionsAttempted attemptedQuestions={5} />
        </BackGround>
      </>
    );
  }
}
