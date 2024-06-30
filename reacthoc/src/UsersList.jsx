import React, {useEffect, useState} from 'react'
import HOC from './HOC';

function UsersList({data}) {
    // const [users, setUsers] = useState([]);
    // const [term, setTerm] = useState("");
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const json = await res.json();
    //         console.log(json)
    //         setUsers(json);
    //     };
    //     fetchUser();
    // }, [])

    let renderUsers = data.map((user) => {
        return(
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        )
    })

    // let filterUser = users.filter(({name}) => {
    //     return name.indexOf(term) >= 0;
    // }).map((user) => {
    //     return(
    //         <div key={user.id}>
    //             <p>
    //                 <strong>{user.name}</strong>
    //             </p>
    //         </div>
    //     )
    // })

  
    return (
    <div>
        <div>{renderUsers}</div>
    </div>
  );
};

const SearchUsers = HOC(UsersList, "users")

export default SearchUsers;
