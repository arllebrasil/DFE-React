import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 0,
            value2: 0,
            soma: 0,
        };
        this.value1ChangeHandle = this.value1ChangeHandle.bind(this);
        this.value2ChangeHandle = this.value2ChangeHandle.bind(this);
        this.somaButtonClick = this.somaButtonClick.bind(this);
    }

    value1ChangeHandle(input) {
        const value = input.target.value;
        this.setState({ value1: value });
    }

    value2ChangeHandle(input) {
        const value = input.target.value;
        this.setState({ value2: value });
    }

    somaButtonClick(){
        this.setState(
            (state, props) => {
                return {soma: Number(state.value1) + Number(state.value2)};
            },
        );
    }

    render() {
        const appName = this.props.appName;
        return (
            <div className='container'>
                <h2>{appName}</h2>
                <div>
                    <input type="number"
                        value={this.state.value1}
                        onChange={this.value1ChangeHandle} />

                    <input t
                        type="number"
                        value={this.state.value2}
                        onChange={this.value2ChangeHandle} />
                </div>
                <button onClick={this.somaButtonClick}>+</button>
                <h2>{this.state.soma}</h2>
            </div>
        )
    }
}

export default Home;