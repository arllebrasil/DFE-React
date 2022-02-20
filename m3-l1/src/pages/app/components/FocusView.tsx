import styled from "styled-components";
import { Hit } from "../../../features/hits/hitsSlice"
import { useAppDispatch } from "../../../app/hooks";
import { clearFocus } from "../../../features/focus/focusSlice";
type FocusViewProps = {
    hit: Hit;
};

const Wraper = styled.div`
    position:fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);

    .focus{
        width: 56vw;
        padding: 1.8rem;
        background-color:#fefefe;
        border-radius: 6px;
    }
    .detalhes h3,span,i{
        color:black;
        font-weight: bold;
    }

    .actions{
        display: flex;
        justify-content: end;
        button{
            color:var(--color1);
            background-color: transparent;
            font-size:16px;
            font-weight:bold;
            border-radius: 4px 4px 0px 0px;
            border: none;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, .15); 
            padding: 8px 12px;
            
        }
        button:hover{            
            border-bottom: 2px solid var(--color1);
        }
    }
`;

function FocusView({ hit }: FocusViewProps) {
    const dispatch = useAppDispatch();
    return (<Wraper className="focus-container">
        <div onKeyUp={(event: React.KeyboardEvent<HTMLDivElement>) => {
            console.log(event.key);
        }}

            className="focus">

            <div className="detalhes">
                <h3>Detalhes</h3>
                <p>
                    <span><i className='fas fa-user-alt' /> Title:</span>
                    {hit.author}
                </p>
                <p>
                    <span><i className='fa fa-book' /> Autor:</span>
                    {hit.title}</p>
                <span><i className="fas fa-link" /> Link:</span>
                {hit.url && <a href={hit.url}> URL</a>}
            </div>
            <div className="actions">
                <button
                    onClick={() => {
                        dispatch(clearFocus());
                    }}>
                    Fechar
                </button>
            </div>
        </div>
    </Wraper>);
}

export default FocusView;