import React, { Component } from "react";
import SocialProfiles from "./SocialMedia";
import Projects from "./Projects";
import profilePic from "../assets/profile.png";
import Title from './Title';

class App extends Component {
  state = { displayBio: false };

  // This gets auto added as a property
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  // This is by default bound to this component so the normal method syntax is fine
  render() {
    // turnary operator makes this a constant instead of a variable (noted by let)
    const bio = this.state.displayBio ? (
      <div>
        <p>I am currently living in the greater DFW metroplex in Texas</p>
        <p>My favorite coding languages are: Python, Golang, Java</p>
        <p>I also enjoy Swimming, WaterPolo, Rock Climbing, and Traveling!</p>

        <button onClick={this.toggleDisplayBio}>Read Less</button>
      </div>
    ) : (
        <div>
          <button onClick={this.toggleDisplayBio}>Read More</button>
        </div>
      );

    // Basic if check for bio state
    // if (!this.state.displayBio) {
    //     bio = null;
    // }

    return (
      <div>
        <img
          src={profilePic}
          alt="profile-pic"
          className="profile"
        // style={{ width: 400, height: 400 }}
        />
        <h1>Hello!</h1>
        <p>My name is Kevin.</p>
        <Title />
        <p>
          I am creating a React App to help build my portfolio and learn even
          more!
        </p>

        {/* You can add code within {} */}
        {bio}
        <hr />
        <Projects />

        <hr />
        <SocialProfiles />

      </div>
    );
  }
}

export default App;
