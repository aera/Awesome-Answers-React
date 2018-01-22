import React, {Component} from 'react';

class CurrentDateTime extends Component {
  constructor (props) {
    super(props);

    this.state = {
      dateTime: new Date()
    }
  }

  componentDidMount () {
    // code inside of this will run once the component
    // is rendered in the DOM (i.e. visible)
    this.intervalId = setInterval(
      () => {
        this.setState({dateTime: new Date()})
      },
      1000
    );
  }

  componentWillUnmount () {
    // code inside of this will run just before
    // the component is removed from the DOM.
    clearInterval(this.intervalId);
    this.intervalId = null;
  }



  render () {
    const {dateTime} = this.state;

    return (
      <span className="CurrentDateTime">
        {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
      </span>
    );
  }
}

export {CurrentDateTime};
