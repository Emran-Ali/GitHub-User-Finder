import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const URL = process.env.REACT_APP_GIT_URL;
const token = process.env.TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: []
  }
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Get search result
  const searchUsers = async (text) => {
    const param = new URLSearchParams({
      q: text
    })

    const res = await fetch(`${URL}/search/users?${param}`, {
      headers: {
        Authorization: token,
      }
    });

    const { items } = await res.json();

    dispatch({
      type: 'Get_User',
      payload: items,
    })
  }
  //clear search
  const clearUsers = async () => {
    dispatch({
      type: 'CLEAR',
      payload: initialState,
    })
  }

  return <GithubContext.Provider value={{
    users: state.users,
    searchUsers,
    clearUsers,
  }} >
    {children}
  </GithubContext.Provider>
}

export default GithubContext;
