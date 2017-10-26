import React from 'react';

// dynamically generated data
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json',{method: 'GET', mode: 'no-cors', headers: {
            'Access-Control-Allow-Origin':'*'
            }
        })
        .then( response => response.json() )
        .then( ({results: items}) => this.setState({items}) );
    }    
    filter(e) {
        this.setState({filter: e.target.value});
    }
    render() {
        let items = this.state.items;
        if(this.state.filter) {
            items = items.filter(
                item => item.name.toLowerCase()
                .includes(this.state.filter.toLowerCase())
            );
        }
        return (
            <div>
                <input type="text" onChange={this.filter.bind(this)}/>
                {items.map(
                    item => 
                    <People key={item.name} people={item}/>
                )}
            </div>
        );
    }
}

const People = (props) => <h4>{props.people.name}</h4>

export default App;