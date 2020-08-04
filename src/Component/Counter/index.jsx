import React from 'react';
import store from '../../store';
import * as Action from '../../store/action/action';
class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }

    increase = () => {
        store.dispatch({type: 'increase'})
        this.setState((prevState) => ({
            number: prevState.number + 1
        }))
    }

    decrease = () => {
        store.dispatch({type: 'decrease'})
        this.setState((prevState) => ({
            number: prevState.number - 1
        }))
    }

    render() {
        return (
            <h2>
                <button onClick={this.increase}>+</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.decrease}>-</button>
            </h2>
        )
    }

}
export default Counter