const URL = process.env.REACT_APP_GIT_URL;
const token = process.env.TOKEN;

//Get search result
export const searchUsers = async (text) => {
    const param = new URLSearchParams({
        q: text
    })

    const res = await fetch(`${URL}/search/users?${param}`, {
        headers: {
            Authorization: token,
        }
    });

    const { items } = await res.json();

    return items;
}

//Get single user
export const getUser = async (login) => {

    const res = await fetch(`${URL}/users/${login}`, {
        headers: {
            Authorization: token,
        }
    });

    if (res.status === 404) {
        window.location = '/notfound';
    }
    else {
        const data = await res.json();

        return data;
    }

}

//get user repos
export const getRepos = async (login) => {

    const res = await fetch(`${URL}/users/${login}/repos`, {
        headers: {
            Authorization: token,
        }
    });

    const repos = await res.json();

    return repos;
}