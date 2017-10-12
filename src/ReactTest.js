import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import AnswerOption from './AnswerOption';



function ReactTest(props) {
  const Question = props => <h3 className="question">{props.content}</h3>;
  const QuestionCount = props => <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>;

  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <ReactCSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
    </ReactCSSTransitionGroup>
    
  );
}

ReactTest.propTypes = {
  answer: React.PropTypes.string.isRequired,
  answerOptions: React.PropTypes.array.isRequired,
  question: React.PropTypes.string.isRequired,
  questionId: React.PropTypes.number.isRequired,
  questionTotal: React.PropTypes.number.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired,
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired,
  content: React.PropTypes.string.isRequired
};

export default ReactTest;
