import { useEffect, useState } from "react"
import UserItem from "./UserItem";

function UsersResult() {
    const [users, setUsers] = useState(['Emran']);

    useEffect(() => {
        fetchUsers();
    }, []);


    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GIT_URL}/users`, {
            headers: {
                Authorization: process.env.TOKEN,
            }
        });

        const data = await res.json();
        console.log(data);
        setUsers(data);
    }

    return (
        <div className="grid grit-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {
                users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))
            }
        </div>
    )
}

// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer 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");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://api.github.com/users", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

export default UsersResult
