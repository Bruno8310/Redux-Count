import React from 'react';
import Counter from '../Counter'
import store from '../../store';
import * as Action from '../../store/action/action';
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            totalSum: 0,
        }
    }

    getInputNumber = (even) => {
        const size = Number(even.target.value)
        if (size < 0) {
          console.log("size cannot be less than 0")
          return false
        }
        // 
      }

      render() {
          store.subscribe(() => {
              this.setState({
                  totalSum: store.getState()
              })
          })
      }

}