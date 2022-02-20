import ListItem from "./ListItem";
import { Hit } from "../../../features/hits/hitsSlice";
import { useAppDispatch } from "../../../app/hooks";
import { setFocus } from "../../../features/focus/focusSlice";

type ListViewProps = {
    hits: Hit[];
}



function ListView({ hits }: ListViewProps) {
    const dispatch = useAppDispatch();

    return (<div className="list">
        <ul>
            {
                hits.map((hit: Hit) => (
                    <li
                    placeholder="hit-item"
                        onClick={() => {
                            dispatch(setFocus(hit));
                        }}
                        key={hit.objectID}
                    >
                        <ListItem hit={hit} />
                    </li>)
                )
            }
        </ul>
    </div>);
}

export default ListView;