import React, { Component } from 'react';
import Title from './components/title.js';
import Form from './components/form.js';
import Weather from './components/weather.js';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Title />
            </div> {/* ends col-4 */}
            <div className="col-md-8">
              {/* TODO: add form and weather info components */}
              <div className="row">
                <div className="col-md-12">
                <Form />
                </div> {/* ends col-12 for form */}
              </div> {/* ends row for form */}
              <div className="row">
                <div className="col-md-12">
                <Weather city={this.state.city} country={this.state.country} temperature={this.state.temperature} humidity={this.state.humidity} description={this.state.description} error={this.state.error} />
                </div> {/* ends col-12 for form */}
              </div> {/* ends row for form */}
            </div> {/* ends col-8 */}
          </div> {/* ends row */}
        </div> {/* ends container */}
        {/* Div below for class app */}
      </div>
    );
  }
}

export default App;
