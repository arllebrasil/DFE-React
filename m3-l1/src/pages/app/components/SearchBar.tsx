import React from 'react';

type SearchBarProps = {
    onSubmit: (event: React.FormEvent) => Promise<void>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar({onSubmit, onChange}:SearchBarProps) {
    return <form className="search" onSubmit={onSubmit}>
        <input type="text" placeholder="Procure um hit.." onChange={onChange}/>
        <button type="submit" ><span className='fa fa-search'></span> Pesquisar</button>
    </form>
}

export default SearchBar;