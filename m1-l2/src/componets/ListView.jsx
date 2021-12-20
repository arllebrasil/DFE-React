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
                            <p><span className='fas fa-user-alt'></span> : {item.author}</p>
                            <p><span className='fa fa-book'></span> : {item.title}</p>                      
                            <span><i className="fas fa-link"></i></span> : {item.url && <a href={item.url}>link</a>}
                        </div>
                    </li>),
                )
                }
            </ul>
        );
    }
}

export default ListView;