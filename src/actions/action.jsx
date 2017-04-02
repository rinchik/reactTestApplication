import axios from 'axios';

const searchActions = {
    activate(dispatch) {
        return axios.get('/api')
            .then((result)=>{
                dispatch({ type: 'ACTIVATION', state: result.data});
            })
    }
};

export default searchActions;