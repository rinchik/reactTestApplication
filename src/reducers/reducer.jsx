import { assign } from 'lodash';

const initialState = {};

export default function(state = initialState, action = {}) {
    switch(action.type) {
        case 'ACTIVATION':
            return state = assign({}, state, action.state );
    }
    return state;
}