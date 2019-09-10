import React from 'react'
import s from './users.module.css'

let Users = (props)=>{

    if (props.users.length ===0){
        props.setUsers(
            [
                {id: 0, pictureUrl:'', followed: false, fullName: 'Alex',  status: 'hello', location: {city: 'Simf', country: 'Russia'}},
                {id: 1, pictureUrl:'', followed: true, fullName: 'Dima',  status: 'hello1', location: {city: 'Minsk', country: 'Belarus'}},
                {id: 2, pictureUrl:'', followed: false, fullName: 'David',  status: 'hello2', location: {city: 'Kiev', country: 'Ukraine'}}
            ])
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.pictureUrl} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{props.unfollow(u.id)} }>Unfollow</button>
                            : <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;