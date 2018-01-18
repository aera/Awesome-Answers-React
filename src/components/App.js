import React from 'react';
import {QuestionShowPage} from './QuestionShowPage';
// Anywhere you write JSX tags, React must be
// imported, because JSX tags are translated
// to React.createElement(...) calls.

function App () {
  return (
    <QuestionShowPage />
  );
}

// import App from './App';
// ð will make the value at App available by importing with ð
// in other files.
export default App;
