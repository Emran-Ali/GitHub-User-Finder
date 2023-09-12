const githubReducer = (state, action) => {
    switch (action.type) {
        case 'Get_User': return {
            ...state,
            users: action.payload,
        }
        default: return state;
    }

}

export default githubReducer;