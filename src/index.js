import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// When importing a default (i.e. export default App;),
// the name that comes after `import` can be anything like
// a variable name.
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();






// bump
