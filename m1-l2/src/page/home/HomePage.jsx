import React from 'react';
import api from '../../config/api';
import ResearchBar from '../../componets/ResearchBar';
import ListView from '../../componets/ListView';
import './style.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hits: [], hitsQuery: '' };
        this.hitsQueryChange = this.hitsQueryChange.bind(this);
        this.searchHandle = this.searchHandle.bind(this);
    }

    componentDidMount() {
        this.searchHandle();
    }

    hitsQueryChange(event) {
        let { value } = event.target;
        this.setState({ hitsQuery: value });
    }

    async searchHandle(event) {
        event?.preventDefault();
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
                    <h1>{this.props.title}</h1>
                    <ResearchBar
                        changeCallBack={this.hitsQueryChange}
                        submitCallBack={this.searchHandle} />

                    {this.state.hits.length > 0 ?
                        <ListView itens={this.state.hits} /> :
                        <span> Nenhum resultado encontrado para : {this.state.hitsQuery}</span>
                    }
                </div>
            </main>);
    }
}
export default HomePage;