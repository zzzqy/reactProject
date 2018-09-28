import { getGoodInfo } from './actionTypes'

const defaultState = {
    id:0
};

const reducer = (state=defaultState,action) => {
    if(action.type === "getGoodInfo"){
        return{
            id:action.payload
        }
    }
    return state
}

export default reducer