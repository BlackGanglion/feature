import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ThemeContext = React.createContext('light')
class ThemeProvider extends React.Component {
  state = {theme: 'light1'}
  render() {
    return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        onChange: () => {
          this.setState({ theme: 'dark1' });
        }
      }}>
        <button onClick={() => {
          this.setState({ theme: 'dark1' });
        }}>change1</button>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

class Test extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          return (
            <div className="content">
              <button onClick={value.onChange}>change-content</button>
              <div>{value.theme}</div>
              <div>{this.props.theme}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

class App extends React.Component {
  state = {theme: 'light2'}
  render() {
    return (
      <ThemeProvider>
        <button onClick={() => {
          this.setState({ theme: 'dark2' });
        }}>change1</button>
        <Test theme={this.state.theme}/>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
