import React from 'react';
// Anywhere you write JSX tags, React must be
// imported, because JSX tags are translated
// to React.createElement(...) calls.
import {QuestionShowPage} from './QuestionShowPage';
import {QuestionIndexPage} from './QuestionIndexPage';
import {QuestionNewPage} from './QuestionNewPage';
import {SignInPage} from './SignInPage';
import {NavBar} from './NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App () {
  // The <Switch> component is used with <Route> children.
  // It will force only one route children to render at a time.
  // Only the first <Route> that matches will render.
  return (
    <Router >
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/sign_in" component={SignInPage} />
          <Route path="/questions" exact component={QuestionIndexPage} />
          <Route path="/questions/new" component={QuestionNewPage} />
          <Route path="/questions/:id" component={QuestionShowPage} />
        </Switch>
      </div>
    </Router>
  );
}

// import App from './App';
// ð will make the value at App available by importing with ð
// in other files.
export default App;
