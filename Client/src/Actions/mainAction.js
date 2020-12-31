import actionNames from '../Constants/actionNames';

const actions = {

    testAction: function(text){
   
        return {
            type: actionNames.testAction,
            text: text
        }
    }
};

export default actions;