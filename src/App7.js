import React from 'react';

// child component utilities
class App extends React.Component {
    render() {
        return (
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
            </Parent>
        );
    }
}

class Parent extends React.Component {
    render() {
        // let items = React.Children.forEach(this.props.children, child => console.log(child.props.className));
        let items = React.Children.toArray(this.props.children); // multiple child companent
        // only accepts single child if more throws error
        // let items = React.Children.only(this.props.children);
        console.log(items)
        return null;
    }
}

export default App;