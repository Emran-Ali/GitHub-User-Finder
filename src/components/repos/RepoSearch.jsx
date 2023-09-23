import React, { useContext, useEffect } from 'react'
import GithubContext from '../../context/github/GithubContext';
import { useParams } from 'react-router-dom';
import RepoItem from './RepoItem';
import { getRepos } from '../../context/github/GithubAction';

function RepoSearch() {
    const { repos, dispatch } = useContext(GithubContext);
    const param = useParams();

    useEffect(() => {
        const getUserData = async () => {
            const userRepo = await getRepos(param.login)
            dispatch({ type: "Get_Repos", payload: userRepo })
        };
        getUserData();
    }, []);

    return (
        <div className='rounded-lg shadow-lg card bg-base-100'>
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold card-title">Letest Repositories</h2>

                {
                    repos.map((repo) => (
                        <RepoItem key={repo.id} repo={repo} />
                    ))
                }
            </div>
        </div>
    )
}

export default RepoSearch;
