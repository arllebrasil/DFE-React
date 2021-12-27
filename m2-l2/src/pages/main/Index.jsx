import { useState, useEffect } from 'react';
import api from '../../service/api';
import ListView from './components/ListView';
import SearchBar from './components/SearchBar';
import './styles.css';

function App(props) {

    const [query, setQuery] = useState('');
    const [appHits, setAppHits] = useState([]);

    useEffect(onSubmitRequest, []);

    function onInputChange(event) {
        const { value } = event.target;
        setQuery(value);
    }

    async function onSubmitRequest(event) {
        event?.preventDefault();
        const {hits}  = await (await api.get('search', { params: { query } })).data;
        setAppHits(hits);
    }

    return (
        <div className="main">
            <h1>{props.title}</h1>
            <SearchBar
                onSubmit={onSubmitRequest}
                onChange={onInputChange} />
            <ListView hits={appHits}/>
        </div>
    );
}

export default App;