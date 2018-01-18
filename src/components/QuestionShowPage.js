import React from 'react';
// When you're not export a default from a module
// (e.g. export {QuestionDetails, AnswerDetails}),
// you must braces after `import` to choose the values
// that you are import from the module.
import {QuestionDetails} from './QuestionDetails';
import {AnswerDetails} from './AnswerDetails';

function QuestionShowPage () {
  // To pass props to React elements, set them with
  // "HTML attributes". Each attribute will as a property
  // of the `props` object.

  // When passing props in JSX, any value that
  // is a non-string (e.g. numbers, objects, arrays, functions, etc)
  // must be put inside {}.
  return (
    <main
      className="QuestionShowPage"
      style={{
        padding: '0 20px'
      }}
    >
      {/* I'm a valid comment */}
      <QuestionDetails
        title="What is your favourite colour?"
        body="Red, magenta, blue, indigo, purple, etc."
        created_at="2017-01-01"
        updated_at="2017-01-01"
        view_count={901}
        author={{full_name: "Jon Snow"}}
      />
      <h3>Answer</h3>
      <AnswerDetails
        body="Magenta with a tinge of teal"
        author_full_name="Jane Doe"
        created_at="2017-01-01"
      />
    </main>
  );
}

export {QuestionShowPage};
