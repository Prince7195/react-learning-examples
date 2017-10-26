import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            a: ""
        }
    }
    update() {
        this.setState({
            // a: ReactDOM.findDOMNode(this.a).value,
            a: this.a.refs.input.value,
            b: this.refs.b.value
        });
    }
    render() {
        return (
            <div>
                <Input 
                ref={component => this.a = component}
                update={this.update.bind(this)} />
                {this.state.a}
                <hr/>
                <input type="text" 
                ref="b"
                onChange={this.update.bind(this)} />
                {this.state.b}
            </div>
        );
    }
}

class Input extends React.Component {
    render() {
        // return (<input 
        // type="text"
        // onChange={this.props.update}/>
        // );
        return (<div>
            <input 
            ref="input"
            type="text"
            onChange={this.props.update}/>
            </div>
            );
    }
}

export default App;

/*
    // Access nested data in parent by child component using props.children
    class App extends React.Component {
        render() {
            return <Button>I <Heart /> React</Button>
        }
    }

    const Button = (props) => <button>{props.children}</button> // takes the valuse passed by props.children inside Button tag in parent

    class Heart extends React.Component {
        render() {
            return (
                <span>&hearts;</span>
            )
        }
    }
*/

/*
    // custom validation for proptype(Ex: required) in react component
    class App extends React.Component {
        render() {
            return <Title txt="Welcome to React Hell"/>;
        }
    }

    const Title = (props) => <h1>Title: {props.txt}</h1>

    Title.propTypes = {
        // txt: PropTypes.string.isRequired // if error gives the default error messages
        txt(props, propName, component) {
            if(!(propName in props))
                return new Error(`missing ${propName}`);
        }
    }
*/

/*
    // react synthetic events
    class App extends React.Component {
        constructor() {
            super(); //accessing the context of the component
            this.state = {
                currentEvent: "---"            
            };
            this.update = this.update.bind(this);
        }
        update(e) {
            this.setState({
                currentEvent: e.type
            });
        }
        render() {
            return (
                <div>
                    <textarea 
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onBlur={this.update}
                    onFocus={this.update}
                    onDoubleClick={this.update}
                    onClick={this.update}
                    onTouchStart={this.update}
                    onTouchMove={this.update}
                    onTouchEnd={this.update}
                    cols="30"
                    rows="10" />
                    <h1>{this.state.currentEvent}</h1>
                </div>
            );
        }
    }
*/

/*
    // accessing components using references
    // Accesing directy:
    class App extends React.Component {
        constructor() {
            super();
            this.state = {
                a: ""
            }
        }
        update() {
            this.setState({
                a: this.a.value,
                b: this.refs.b.value
            });
        }
        render() {
            return (
                <div>
                    <input type="text" 
                    ref={node => this.a = node}
                    onChange={this.update.bind(this)} />
                    {this.state.a}
                    <hr/>
                    <input type="text" 
                    ref="b"
                    onChange={this.update.bind(this)} />
                    {this.state.b}
                </div>
            );
        }
    }

    // Accesing child component:
    class App extends React.Component {
        constructor() {
            super();
            this.state = {
                a: ""
            }
        }
        update() {
            this.setState({
                // a: ReactDOM.findDOMNode(this.a).value,
                a: this.a.refs.input.value,
                b: this.refs.b.value
            });
        }
        render() {
            return (
                <div>
                    <Input 
                    ref={component => this.a = component}
                    update={this.update.bind(this)} />
                    {this.state.a}
                    <hr/>
                    <input type="text" 
                    ref="b"
                    onChange={this.update.bind(this)} />
                    {this.state.b}
                </div>
            );
        }
    }

    class Input extends React.Component {
        render() {
            // return (<input 
            // type="text"
            // onChange={this.props.update}/>
            // );
            return (<div>
                <input 
                ref="input"
                type="text"
                onChange={this.props.update}/>
                </div>
                );
        }
    }
*/