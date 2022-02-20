import { Hit } from "../../../features/hits/hitsSlice"
type ListItemProps = {
    hit: Hit;
};

function ListItem({ hit }: ListItemProps) {
    return (<div className="item">
        <p>
            <span><i className='fas fa-user-alt' />Titulo</span>:
            {hit.author}
        </p>
        <p>
            <span><i className='fa fa-book' />Autor</span>:
            {hit.title}</p>
        <span><i className="fas fa-link" />Link</span>:
        {hit.url && <a href={hit.url}>URL</a>}
    </div>);
}

export default ListItem;