import React from 'react';
import PropTypes from 'prop-types';

// stateless function
// const App = () => <h1>Welcome to React</h1>

class App extends React.Component {
  constructor() {
    super(); // extend the React.component
    this.state = {
      txt: "This is the state txt",
      cat: 7
    }
  }

  update(e) {
    this.setState({
      txt: e.target.value
    });
  }

  render() {
    return (
      <div>        
        <h1>{this.state.txt} - {this.state.cat}</h1>
        <Widgit update={this.update.bind(this)} />
      </div>    
    );
    
  }
}

const Widgit = (props) => <input type="text" onChange={props.update}/>

export default App;

/*
  // creating the DOM element throuch React
   return React.createElement('h1', null, 'Welcome to React Hell!!');
*/

/*
  // returning single element 
   return <h1>Welcome to React Hell!</h1>;
*/

/*
  // returning multiple element
  return (
    <div>
      <h1>Welcome to React Hell!!!</h1>
      <b>Bold</b>
    </div>
  );
 */

 /*
    // rendering dynamic values using props 
    import PropTypes from 'prop-types';
    render() {
      let txt = this.props.txt;
      let cat = this.props.cat;
      return <h1>{txt}{cat}</h1>;
    }

    App.propTypes = {
      txt: PropTypes.string,
      cat: PropTypes.number.isRequired
    }

    App.defaultProps = {
      txt: "Welcome to React",
      cat: 7
    }
*/

/*
    // using React-state
     constructor() {
        super(); // extend the React.component
        this.state = {
          txt: "This is the state txt",
          cat: 7
        }
      }

      update(e) {
        this.setState({
          txt: e.target.value
        });
      }

      render() {
        return (
          <div>
            <input type="text" onChange={this.update.bind(this)}/>
            <h1>{this.state.txt} - {this.state.cat}</h1>
          </div>    
        );
        
      }
*/

/*
  // accessing the child component from parent
  class App extends React.Component {
    constructor() {
      super(); // extend the React.component
      this.state = {
        txt: "This is the state txt",
        cat: 7
      }
    }

    update(e) {
      this.setState({
        txt: e.target.value
      });
    }

    render() {
      return (
        <div>        
          <h1>{this.state.txt} - {this.state.cat}</h1>
          <Widgit update={this.update.bind(this)} />
        </div>    
      );
      
    }
  }
  const Widgit = (props) => <input type="text" onChange={props.update}/>
 */