const { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT } = require("../actions/userTypes");

function signinReducer(state={},action) {
    switch(action.type){
        case SIGNIN_REQUEST:
            return {loading:true}
        case SIGNIN_SUCCESS:
            return{loading:false,userInfo: action.payload}
        case SIGNIN_ERROR:
            return{loading:false,error: action.payload}
        case SIGNOUT:
            return {}
        default:
            return state
    }   
}

export default signinReducer