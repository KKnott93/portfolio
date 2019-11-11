import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
    // console.log("Component more this", this);

    this.toggle = this.toggle.bind(this);
  }

  // readMore() {
  //   // console.log("your button was clicked");
  //   this.setState({ displayBio: true });
  // }
  // readLess() {
  //   // console.log("your button was clicked");
  //   this.setState({ displayBio: false });
  // }
  toggle() {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    // turnary operator makes this a constant instead of a variable (noted by let)
    const bio = this.state.displayBio ? (
      <div>
        <p>I am currently living in the greater DFW metroplex in Texas</p>
        <p>My favorite coding languages are</p>
        <ol type="1">
          <li>Python</li>
          <li>Golang</li>
          <li>Java</li>
        </ol>
        <p>I also enjoy Swimming, WaterPolo, Rock Climbing, and Traveling!</p>

        <button onClick={this.toggle}>Read Less</button>
      </div>
    ) : (
      <div>
        <button onClick={this.toggle}>Read More</button>
      </div>
    );

    // Basic if check for bio state
    // if (!this.state.displayBio) {
    //     bio = null;
    // }

    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Kevin, I am a software engineer.</p>
        <p>
          I am creating a React App to help build my portfolio and learn even
          more!
        </p>

        {/* You can add code within {} */}
        {bio}
      </div>
    );
  }
}

export default App;
