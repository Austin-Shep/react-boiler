import React from 'react'
import { hot } from 'react-hot-loader'
//import greeter from "./components/greeter";
import './styles/index.css'

class App extends React.Component {
  state = {
    counter: 0
  }
  render() {
    return (
      <div>
        <h1>Count!: {this.state.counter}</h1>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <button
          onClick={() =>
            this.setState(state => ({ counter: state.counter + 1 }))
          }
        >
          +
        </button>
      </div>
    )
  }
}
// eslint-disable-next-line
export default hot(module)(App)
