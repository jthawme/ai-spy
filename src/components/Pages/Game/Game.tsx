import React, { Dispatch } from "react";

import { connect, DispatchProp } from "react-redux";

import Hints from "../../Hints/Hints";
import VisualSpeech from "../../VisualSpeech/VisualSpeech";
import SynthesisHelper, { SPEECHER } from "../../VisualSpeech/SynthesisHelper";
import AnswerInput from "../../AnswerInput/AnswerInput";
import AnswerResolver from "../../AnswerResolver/AnswerResolver";

import Card from "../../Common/Card/Card";
import Button from "../../Common/Button/Button";
import ImageThumbs from "../../Common/ImageThumbs/ImageThumbs";

import { RootState } from "../../../store/store";

import * as styles from "./Game.module.scss";
import Redirect from "../../Common/Router/Redirect";

enum GAME_STATUSES {
  IDLE,
  GUESSING,
  SUCCESS,
  ADVANCE,
}

interface GameProps {
  images: string[];
  labels: string[][];
}

interface GameState {
  guessing: boolean;
  muted: boolean;
  voiceEnabled: false | SpeechSynthesisVoice;
  speechText: string;
  selectedImage: number;
  questionIndex: number;
  totalQuestions: number;
  currentAnswer: string | undefined;
  gameStatus: GAME_STATUSES;
}

const GAME_STATUS = {
  IDLE: 0,
  GUESSING: 1,
  SUCCESS: 2,
  ADVANCE: 3,
};

const prepareWord = (word: string | undefined) =>
  word && word.trim().toLowerCase();

class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);

    this.state = {
      guessing: false,
      muted: true,
      voiceEnabled: false,
      speechText: "",
      selectedImage: -1,
      questionIndex: 0,
      totalQuestions: -1,
      currentAnswer: undefined,
      gameStatus: GAME_STATUS.IDLE,
    };
  }

  onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (evt.target instanceof HTMLFormElement) {
      const formEntries = Object.fromEntries(
        new FormData(evt.target).entries()
      );
      const answer: string = formEntries.answer.toString();

      this.guess(answer);
    }
  };

  shouldInputsDisable() {
    return this.state.gameStatus !== GAME_STATUS.IDLE;
  }

  setVoice = (voice: false | SpeechSynthesisVoice) => {
    this.setState({ voiceEnabled: voice });
  };

  toggleMute = () => {
    this.setState({ muted: !this.state.muted });
  };

  setSelectedImage = (selectedImage: number) => {
    if (selectedImage === this.state.selectedImage) {
      this.setState({
        selectedImage: -1,
      });
    } else {
      this.setState({ selectedImage });
    }
  };

  onTotal = (totalQuestions: number) => {
    this.setState({ totalQuestions });
  };

  onResolvedAnswer = (currentAnswer: string) => {
    console.log("Current answer", currentAnswer);
    this.setState({
      currentAnswer,
      speechText: SPEECHER.INTRO(currentAnswer),
      gameStatus: GAME_STATUS.IDLE,
    });
  };

  guess = (answer: string) => {
    if (prepareWord(answer) === prepareWord(this.state.currentAnswer)) {
      this.setState({
        gameStatus: GAME_STATUS.SUCCESS,
        speechText: SPEECHER.SUCCESS(),
      });

      return;
    }

    this.setState({
      gameStatus: GAME_STATUS.GUESSING,
      speechText: SPEECHER.INCORRECT(),
    });

    return;
  };

  onSpeechEnd = () => {
    if (this.state.gameStatus === GAME_STATUS.GUESSING) {
      this.setState({
        gameStatus: GAME_STATUS.IDLE,
        speechText: SPEECHER.IDLE(),
      });
      return;
    }

    if (this.state.gameStatus === GAME_STATUS.SUCCESS) {
      if (this.state.questionIndex >= this.state.totalQuestions - 1) {
        this.setState({
          gameStatus: GAME_STATUS.ADVANCE,
        });
      } else {
        setTimeout(() => {
          this.setState({
            questionIndex: this.state.questionIndex + 1,
          });
        }, 500);
      }
      return;
    }
  };

  render() {
    const {
      muted,
      voiceEnabled,
      speechText,
      selectedImage,
      questionIndex,
      currentAnswer,
      gameStatus,
    } = this.state;
    const { images, labels } = this.props;

    if (gameStatus === GAME_STATUS.ADVANCE) {
      return <Redirect path="success" />;
    }

    return (
      <>
        <AnswerResolver
          question={questionIndex}
          labels={labels}
          onTotal={this.onTotal}
          onAnswer={this.onResolvedAnswer}
        />
        <SynthesisHelper onGetVoice={this.setVoice} />
        <div className={styles.speech}>
          <VisualSpeech
            text={speechText}
            voice={voiceEnabled}
            muted={muted}
            onEnd={this.onSpeechEnd}
          />
        </div>
        <div className={styles.bar}>
          <ImageThumbs
            className={styles.thumbs}
            images={images}
            selected={selectedImage}
            onSelect={this.setSelectedImage}
          />

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
            <AnswerInput
              disabled={this.shouldInputsDisable()}
              label={currentAnswer}
              shouldFocus={gameStatus === GAME_STATUS.IDLE}
            />
            <Button disabled={this.shouldInputsDisable()}>Guess</Button>
          </form>
        </Card>
      </>
    );
  }
}

const mapStateToProps = (store: RootState) => ({
  images: store.game.images,
  labels: store.game.labels,
});

export default connect(mapStateToProps)(Game);
