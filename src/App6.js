import React from 'react';
import './App6.css';

// jsx live compiler ie,. html to react code compiler 
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            err: "",
            input: "/* add your jsx here */",
            output: ""
        }
    }
    update(e) {
        let code = e.target.value;
        try{
            this.setState({
                output: window.Babel
                .transform(code, { presets: ['es2015', 'react'] }).code,
                err: ""
            });
        }
        catch(err) {
            this.setState({
                err: err.message
            });
        }
    }
    render() {
        return (
            <div>
                <h1>jsx live compiler</h1>
                <header>{this.state.err}</header>
                <div className="container">
                    <textarea 
                     onChange={this.update.bind(this)}
                     defaultValue={this.state.input}/>
                     <pre>
                         {this.state.output}
                     </pre>
                </div>
            </div>
        );
    }
}

export default App;