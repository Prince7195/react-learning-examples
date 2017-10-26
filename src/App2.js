import React from 'react';
import ReactDOM from 'react-dom';

// React Component LifeCycle
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            val: 0
        }
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({
            val: this.state.val + 1
        });
    }
    
    // runs on page onload
    componentWillMount() {
        console.log('componentWillMount');
        this.setState({m: 2});
    }        
    
    render() {
        console.log('render');
        return <button onClick={this.update}>{this.state.val * this.state.m}</button>;
    }
    
    // runs when any method is mounted
    componentDidMount() {
        console.log('componentDidMount');
        this.inc = setInterval(this.update, 500);
    }

    // runs when any mounted method is unmounted
    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.inc);
    }
    

}

class Wrapper extends React.Component{
    mount() {
        ReactDOM.render(<App />, document.getElementById('a'));
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById("a"));
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="a"></div>
            </div>
        );
    }

}

export default Wrapper;