import {CounterGroup} from '../../Component/CounterGroup'
import {connect} from 'react-redux'
const mapStateToProps = (state) => ({
    count: state.count,
    totalSum: state.totalSum
})

const mapDispatchToProps = (dispatch) => ({
    increase: () => {
        dispatch({
            type: "increase"
        })
    },
    decrease: () => {
        dispatch({
            type: "decrease"
        })
    },
    getInputNumber: (value) => {
        dispatch({
            type: 'getInputNumber',
            value: value
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterGroup)