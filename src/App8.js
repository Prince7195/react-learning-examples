import React from 'react';

// Extending the funtionality of children component using React.cloneElement
class App extends React.Component {
    render() {
        return (
                <Button>
                    <button value="A">A</button>
                    <button value="B">B</button>
                    <button value="C">C</button>
                </Button>   
        );
    }
}

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: 'None'
        }
    }
    SelectedItem(selected) {
        this.setState({selected});
    }
    render() {
        let fn = child => 
        React.cloneElement(child, {
            onClick: this.SelectedItem.bind(this, child.props.value)
        });
        let items = React.Children.map(this.props.children, fn);
        return (
            <div>
                <h2>You have selected: {this.state.selected}</h2>
                {items}
            </div>
        );
    }
}

export default App;