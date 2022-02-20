import { useState, useEffect } from 'react';
import api from '../../service/api';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectHits , setHits, Hit} from '../../features/hits/hitsSlice';
import { selectFocus } from "../../features/focus/focusSlice";
import ListView from './components/ListView';
import SearchBar from './components/SearchBar';
import FocusView from './components/FocusView';

type AppProps = {
    title: string;
};

function App(props: AppProps) {
    const [query, setQuery] = useState<String>('');
    const hits: Hit[] = useAppSelector(selectHits) ;
    const focus:Hit|null = useAppSelector(selectFocus);
    const dispacth = useAppDispatch();
    useEffect(getHits, []);

    function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setQuery(value);
    }

    async function onSubmitRequest(event: React.FormEvent) {
        event.preventDefault();
        getHits();
    }

    function getHits(){
        let req = async () => {
            const {hits}  = await (await api.get('search', { params: { query } })).data;
            dispacth(setHits(hits));
        };
        req();        
    }

    return (
        <div className="main">
            <h1>{props.title}</h1>
            <SearchBar
                onSubmit={onSubmitRequest}
                onChange={onInputChange} />
            <ListView hits={hits} />
            {focus !== null? <FocusView hit={focus}/>: null}
        </div>
    );
}

export default App;