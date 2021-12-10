import React from 'react';
import './style.css';

class ResearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className="search-container">
            <input onChange={this.props.changeCallBack || console.log} type="text" />
            <button onClick={this.props.submitCallBack}>Search</button>
        </div>);
    }
}

export default ResearchBar;