import React, { Component } from 'react';

const TITLES = [
  "a software engineer",
  "a lover of music",
  "an adrenaline junky",
  "a boardgame afficianado"
];

class Title extends Component {
  state = {
    titleIndex: 0,
    fadeIn: true
  };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000)
    // console.log('Title componenet mounted');
    this.animateTitles();
  }

  componentWillUnmount() {
    // console.log('Title component unmounted');
    clearInterval(this.titleInterval)
    clearInterval(this.timeout)
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });
      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000)
    }, 4000);

    // console.log('Title Interval', this.titleInterval);
  }

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];

    return (
      <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
    );
  }
}

export default Title;