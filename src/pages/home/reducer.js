import {AddGoodNum ,DecGoodNum} from './actionType'

const defaultState = {
    goodNum:1
};

const reducer = (state=defaultState,action) => {
    switch(action.type){
        case AddGoodNum:
            return{
                goodNum:state.goodNum+action.payload
            };
        case DecGoodNum:
            return{
                goodNum:state.goodNum-action.payload
            };
        default:
            return state
    }
}

export default reducer