import { useParams } from "react-router-dom";
import { FaCodepen } from 'react-icons/fa';
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";

function User() {
    const { getUser, user } = useContext(GithubContext);
    const param = useParams();

    useEffect(() => {
        getUser(param.login);
    }, []);

    const { name, type, avatar_url, location, bio, blog, twitter_username,
        login, html_url, followers, following, public_repos, public_gists, hireble } = user;

    return (
        <div>
            <div className="w-full mx-auto lg:w-10/12">
                <div className="mb-4">
                    <Link to='/' className="btn btn-ghost">Back to Search</Link>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 mb:gap-8">
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded-lg shadow-xl card image-full">
                            <figure>
                                <img src={avatar_url} />
                            </figure>
                            <div className="card-body justify-end">
                                <h2 className="card-title mb-0">{name}</h2>
                                <p>{login}</p>
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
                            <mt-4 className="card-actions">
                                <a href={html_url} target="_blank" rel='norefferrer' className="btn btn-outline">Visit Profile</a>
                            </mt-4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default User
