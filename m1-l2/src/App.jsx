import React from 'react';
import HomePage from './page/home/HomePage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div>
            <HomePage title={this.props.title}/>
        </div>);
    }
}

export default App;