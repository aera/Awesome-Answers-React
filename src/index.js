import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// In React, a function that returns a React element (or JSX)
// is called a "component".

// React component function's names must begin with a capital letter.
function QuestionDetails () {
  return (
    // JSX tags are translated into React.createElement() function
    // calls which output React elements.
    <div>
      <h2>
        You're like Bob, except...Bob cared
        about Holland, or something.
      </h2>
      <p>
        Earth: Mostly Harmless
      </p>
      <p>By Jon Snow</p>
      <p><strong>View Count:</strong> 32</p>
      <p><strong>Created At:</strong> 2017-01-01</p>
      <p><strong>Updated At:</strong> 2017-01-01</p>
    </div>
  );
}

function AnswerDetails () {
  return (
    <div>
      <p>What kind of idiot picks a password no one can guess?</p>
      <p>By Jon Snow</p>
      <p><strong>Created At:</strong> 2017-01-01</p>
    </div>
  );
}

function QuestionShowPage () {
  return (
    <main className="QuestionShowPage">
      <QuestionDetails />
      <h3>Answer</h3>
      <AnswerDetails />
    </main>
  );
}

function App () {
  return (
    <QuestionShowPage />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();






// bump
