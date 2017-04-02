import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducers/reducer.jsx';
import actions from './actions/action.jsx'
import { assign } from 'lodash';

import './styles/index.scss'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    componentWillMount() {
    }
    

    render () {
        return (
            <div>
                <p>Hi</p>
            </div>
        );
    }
}


App.propTypes = {
    activate: PropTypes.func,
    results: PropTypes.object
}


const Application = connect(
    function mapStateToProps(state) {
        return {
            results: state
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            activate: () => {
                actions.activate(dispatch);
            }

        };
    }
)(App)


const store = createStore(reducer);

render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('app')
)
