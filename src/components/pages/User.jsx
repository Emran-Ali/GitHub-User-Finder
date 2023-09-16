import { useParams } from "react-router-dom";
import { FaUsers, FaUserFriends, FaCode, FaStore } from 'react-icons/fa';
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RepoSearch from "../repos/RepoSearch";
import GithubContext from "../../context/github/GithubContext";

function User() {
    const { getUser, user } = useContext(GithubContext);
    const param = useParams();

    useEffect(() => {
        getUser(param.login);
    }, []);

    const { name, type, avatar_url, location, bio, blog, twitter_username,
        login, html_url, followers, following, public_repos, public_gists, hireble } = user;

    return (<>
        <div className='w-full mx-auto lg:w-10/12'>
            <div className='mb-4'>
                <Link to='/' className='btn btn-ghost'>
                    Back To Search
                </Link>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
                <div className='custom-card-image mb-6 md:mb-0'>
                    <div className='rounded-lg shadow-xl card image-full'>
                        <figure>
                            <img src={avatar_url} alt='' />
                        </figure>
                        <div className='card-body justify-end'>
                            <h2 className='card-title mb-0'>{name}</h2>
                            <p className='flex-grow-0'>{login}</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="mb-6">
                        <h1 className="text-3xl card-title">
                            {name}
                            <div className="ml-2 ml-1 badge badge-success">
                                {type}
                            </div>
                            {hireble && (
                                <div className="mx-1 badge badge-info">Hirable</div>
                            )}
                        </h1>
                        <p>{bio}</p>
                        <div className="mt-4 card-actions">
                            <a href={html_url} target="_blank" rel='norefferrer' className="btn btn-outline">Visit Github Profile</a>
                        </div>
                    </div>
                    <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                        {location && (
                            <div className="stat">
                                <div className="stat-title text-md">Location</div>
                                <div className="text-lg stat-value">{location}</div>
                            </div>
                        )}
                        {blog && (
                            <div className="stat">
                                <div className="stat-title text-md">Website</div>
                                <div className="text-lg stat-value">
                                    <a href={`https://${blog}`} target="_blank" rel='noreferrer'>Blog</a>
                                </div>
                            </div>
                        )}
                        {twitter_username && (
                            <div className="stat">
                                <div className="stat-title text-md">Twitter</div>
                                <div className="text-lg stat-value">
                                    <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel='noreferrer'>Twitter</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full py-5mb-6 rounded-lg shadow-md bg-base-100 stats">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Followers</div>
                    <div className="stat-value pr-5 text-3xal md:text-4xl">{followers}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUserFriends className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Following</div>
                    <div className="stat-value pr-5 text-3xal md:text-4xl">{following}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaCode className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Public Repos</div>
                    <div className="stat-value pr-5 text-3xal md:text-4xl">{public_repos}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaStore className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Public Gists</div>
                    <div className="stat-value pr-5 text-3xal md:text-4xl">{public_gists}</div>
                </div>
            </div>
            <RepoSearch />
        </div>
    </>
    )
}

export default User
