import React from 'react';
import './style.css';

class ResearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <form onSubmit={this.props.submitCallBack} >
                <div className="search-container">
                    <input onChange={this.props.changeCallBack || console.log} type="text" />
                    <button type='submit' ><span className='fa fa-search'></span> Search</button>
                </div>
            </form>);
    }
}

export default ResearchBar;