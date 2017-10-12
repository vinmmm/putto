import React, { Component } from 'react';
import update from 'react-addons-update';
import ReactTest from './ReactTest';
import Result from './Result';

var testQuestions = [
  {
      question: "Who makes the best front end framwork?",
      answers: [
          {
              type: "Google",
              content: "Google"
          },
          {
              type: "Facebook",
              content: "Facebook"
          },
          {
              type: "stdlib",
              content: "stdlib"
          }
      ]
  },
  {
      question: "What is your favorite color?",
      answers: [
          {
              type: "Google",
              content: "red"
          },
          {
              type: "Facebook",
              content: "blue"
          },
          {
              type: "stdlib",
              content: "grey"
          }
      ]
  },
  {
      question: "What is your favorite color?",
      answers: [
          {
              type: "Google",
              content: "red"
          },
          {
              type: "Facebook",
              content: "blue"
          },
          {
              type: "stdlib",
              content: "grey"
          }
      ]
  },
  {
      question: "What is your favorite color?",
      answers: [
          {
              type: "Google",
              content: "red"
          },
          {
              type: "Facebook",
              content: "blue"
          },
          {
              type: "stdlib",
              content: "grey"
          }
      ]
  },
  {
      question: "What is your favorite color?",
      answers: [
          {
              type: "Google",
              content: "red"
          },
          {
              type: "Facebook",
              content: "blue"
          },
          {
              type: "stdlib",
              content: "grey"
          },

      ]
  },

  {
      question: "What is your favorite color?",
      answers: [
          {
              type: "Google",
              content: "red"
          },
          {
              type: "Facebook",
              content: "blue"
          },
          {
              type: "stdlib",
              content: "grey"
          },
          
      ]
  }
];

class Ask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Google: 0,
        Facebook: 0,
        stdli: 0
      },
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = testQuestions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: testQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < testQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: testQuestions[counter].question,
        answerOptions: testQuestions[counter].answers,
        answer: ''
    });
  }

 backNextQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: testQuestions[counter].question,
        answerOptions: testQuestions[counter].answers,
        answer: ''
    });

 } 

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'one without a brand' });
    }
  }

  renderReactTest() {
    return (
      <div>
      <ReactTest
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={testQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
      <div>
        <button className="myButton" onClick={this.backNextQuestion = this.backNextQuestion.bind(this)}>back</button>
      </div>
      </div>
    );
  }

  renderResult() {
    return (
      <Result ReactTestResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="App">
        <div>
          
         
        </div>
        {this.state.result ? this.renderResult() : this.renderReactTest()}
        
      </div>
    );
  }

}

export default Ask;
