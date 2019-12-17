import React from "react";
// import { useSelector } from "react-redux";

import Hints from "../../Hints/Hints";
import VisualSpeech from "../../VisualSpeech/VisualSpeech";
import SynthesisHelper from "../../VisualSpeech/SynthesisHelper";
import AnswerInput from "../../AnswerInput/AnswerInput";

import Card from "../../Common/Card/Card";
import Button from "../../Common/Button/Button";

// import { RootState } from "../../../store/store";

// import * as styles from '../Pages.module.scss';
import * as styles from "./Game.module.scss";

interface GameProps {}

interface GameState {
  guessing: boolean;
  muted: boolean;
  voiceEnabled: false | SpeechSynthesisVoice;
  testText: any;
}

class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);

    this.state = {
      guessing: false,
      muted: true,
      voiceEnabled: false,
      testText: "I spy, with my little eye, something beginning with, J",
    };
  }

  onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (evt.target instanceof HTMLFormElement) {
      const { answer } = Object.fromEntries(new FormData(evt.target).entries());

      this.setState({ testText: answer });
    }
  };

  shouldInputsDisable() {
    return this.state.guessing;
  }

  setVoice = (voice: false | SpeechSynthesisVoice) => {
    this.setState({ voiceEnabled: voice });
  };

  toggleMute = () => {
    this.setState({ muted: !this.state.muted });
  };

  render() {
    const { muted, voiceEnabled, testText } = this.state;

    return (
      <>
        <SynthesisHelper onGetVoice={this.setVoice} />
        <div className={styles.speech}>
          <VisualSpeech text={testText} voice={voiceEnabled} muted={muted} />
        </div>
        <div className={styles.bar}>
          {voiceEnabled && (
            <Button
              icon={muted ? "volume-x" : "volume"}
              bare
              inline
              size="small"
              onClick={this.toggleMute}
            />
          )}
        </div>
        <Card className={styles.interactive} flat>
          <Hints />

          <form className={styles.form} onSubmit={this.onSubmit}>
            <AnswerInput disabled={this.shouldInputsDisable()} />
            <Button disabled={this.shouldInputsDisable()}>Guess</Button>
          </form>
        </Card>
      </>
    );
  }
}

export default Game;
