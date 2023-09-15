const githubReducer = (state, action) => {
    switch (action.type) {
        case 'Get_Users': return {
            ...state,
            users: action.payload,
        }
        case 'Get_User': return {
            ...state,
            user: action.payload,
        }
        case 'CLEAR': return {
            ...state,
            users: [],
        }
        default: return state;
    }

}

export default githubReducer;