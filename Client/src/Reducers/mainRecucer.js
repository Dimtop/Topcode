import actionNames from '../Constants/actionNames';

const initialState = {
    text:"Initial text"
};

function changeText(state = initialState, action){
    switch(action.type){
        case actionNames.testAction:
            return Object.assign({}, state,{
               text:"Asdsa"
            });
        default:
            return state;
    }
}


export default changeText;

