
function SearchBar(props) {
    return <form className="search" onSubmit={props.onSubmit}>
        <input type="text" placeholder="Procure um hit.." onChange={props.onChange}/>
        <button type="submit" ><span className='fa fa-search'></span> Pesquisar</button>
    </form>
}

export default SearchBar;