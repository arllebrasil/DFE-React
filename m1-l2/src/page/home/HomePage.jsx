import React from 'react';
import api from '../../config/api';
import ResearchBar from '../../componets/ResearchBar';
import ListView  from  '../../componets/ListView';
import './style.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hits: [], hitsQuery: '' };
        this.hitsQueryChange = this.hitsQueryChange.bind(this);
        this.searchHandle = this.searchHandle.bind(this);
    }

    hitsQueryChange(event) {
        let { value } = event.target;
        this.setState({ hitsQuery: value });
    }

    async searchHandle() {
        const { hitsQuery } = this.state;
        const response = await api.get('search', {
            params: {
                query: hitsQuery
            }
        });
        const { hits } = await response.data;
        this.setState({ hits })
        console.log(hits);
    }

    render() {
        return (
            <main className="main">
                <div className="content">
                    <ResearchBar
                        changeCallBack={this.hitsQueryChange}
                        submitCallBack={this.searchHandle} />
                    <h1>{this.state.hits.length}</h1>
                    <ListView itens={this.state.hits} />            
                </div>
            </main>);
    }
}
export default HomePage;