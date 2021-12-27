import ListItem from "./ListItem";

function ListView({ hits }) {
    return (<div className="list">
        <ul>
            {
                hits.map((hit) => (
                    <li key={hit.objectID}>
                        <ListItem hit={hit} />
                    </li>)
                )
            }
        </ul>
    </div>);
}

export default ListView;