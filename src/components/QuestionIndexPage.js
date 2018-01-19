import React, {Component} from 'react';
import {Field} from './Field';
import questions from '../data/questions';

class QuestionIndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      questions: questions
    };

    // this.deleteQuestion = (..args) => this.deleteQuestion(...args);
    // When using a method as a callback on an event listener
    // prop (example: onClick={this.deleteQuestion}),
    // we must bind this to it otherwise we won't have access
    // to any method on `this` such `setState`.
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  deleteQuestion (event) {
    // this.state = this.state.questions.pop() BAD!
    const {questions} = this.state;
    const {currentTarget} = event;
    const questionId = parseInt(currentTarget.getAttribute('data-id'));

    // Everytime you want to change the state, use the
    // this.setState() method. Unlike directly mutating the
    // this.state, this will tell React that the DOM may need
    // to change.
    this.setState({
      questions: questions
        .filter(question => question.id !== questionId)
    });
    console.log('Question delete!');
  }

  render () {
    return (
      <main
        className="QuestionIndexPage"
        style={{padding: '0  20px'}}
      >
        {/* This is how we comment in JSX! */}
        <h2>Questions</h2>
        <ul style={{paddingLeft: '10px'}}>
          {
            this.state.questions.map(question => (
              <li key={question.id}>
                <a href="">{question.title}</a>
                <Field name="Author" value={question.author.full_name} />
                <button
                  data-id={question.id}
                  onClick={this.deleteQuestion}
                >Delete</button>
              </li>
            ))
          }
        </ul>
      </main>
    );
  }
}

export {QuestionIndexPage};
