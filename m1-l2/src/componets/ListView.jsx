import React from 'react';
import './style.css';

class ListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ul>

                {this.props.itens.map(
                    (item) => (<li key={item.objectID}>
                        <div className="card">
                            <p>{item.author}</p>
                            <p>{item.title}</p>
                            {item.link && <a href={item.url}>link</a>}
                        </div>
                    </li>),
                )
                }
            </ul>
        );
    }
}

export default ListView;