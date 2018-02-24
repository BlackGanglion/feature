import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  state = { theme: 'light' };
  changeTheme = () => {
    this.setState(prevState => {
      return { theme: prevState.theme === 'light' ? 'dark' : 'light' };
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          onChange: this.changeTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

class Middle extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="middle">
        <div className="count-1">{this.props.count}</div>
        <ThemeContext.Consumer>
          {value => {
            return (
              <div className="consumer">
                <button onClick={value.onChange}>changeTheme</button>
                <div>{value.theme}</div>
                <div className="count-2">{this.props.count}</div>
              </div>
            );
          }}
        </ThemeContext.Consumer>
        <ThemeContext.Consumer>
          {value => {
            return (
              <div className="consumer">
                <div>{value.theme}</div>
              </div>
            );
          }}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

class App extends React.Component {
  state = { count: 1 };
  changeCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <ThemeProvider>
        <button onClick={this.changeCount}>add</button>
        <Middle count={this.state.count} />
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
