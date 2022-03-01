import { createContext, useReducer } from "react";
import { createRenderer } from "react-dom/test-utils";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({children}) => {

    const initialState = {
        users: [],
        user:{},
        repos:[],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    

    // //clear users from state
    // const clearUsers = () => {
    //     dispatch({
    //         type: 'CLEAR_USERS'
    //     })
    // }

    // //state loading
    // const setLoading = () => dispatch({
    //     type: 'SET_LOADING'
    // })

    return <GithubContext.Provider value={{
        ...state,
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos:state.repos,
        dispatch,
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext