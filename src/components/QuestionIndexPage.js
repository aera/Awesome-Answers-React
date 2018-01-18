import React from 'react';
import {Field} from './Field';
import questions from '../data/questions';

function QuestionIndexPage (props) {
  return (
    <main
      className="QuestionIndexPage"
      style={{padding: '0  20px'}}
    >
      <h2>Questions</h2>
      <ul
        style={{paddingLeft: '10px'}}
      >
        {
          questions.map(question => (
            <li key={question.id}>
              <a href="">{question.title}</a>
              <Field name="Author" value={question.author.full_name} />
            </li>
          ))
        }
      </ul>
    </main>
  );
}

export {QuestionIndexPage};
