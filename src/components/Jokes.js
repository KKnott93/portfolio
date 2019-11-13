import React, { Component } from 'react';
import Header from './Header';


const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em> </p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    // Put call to api in did mount to not delay rendering
    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message));

        // console.log(this.state.jokes)
    }

    render() {
        return (
            <div>
                <h2>Joke API:</h2>
                <Joke joke={this.state.joke} />

                <hr />
                <h3>Do you want ten more jokes?</h3>
                <button onClick={this.fetchJokes}>Click here!</button>
                {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
            </div>
        )
    }
}

export default Jokes