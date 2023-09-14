const githubReducer = (state, action) => {
    switch (action.type) {
        case 'Get_User': return {
            ...state,
            users: action.payload,
        }
        case 'CLEAR': return {
            ...state,
            users: [],
        }
        default: return state;
    }

}

export default githubReducer;