import React from 'react'
import s from './users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/man.jpg'

let Users = (props)=>{

    if (props.users.length ===0){

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })

        // props.setUsers(
        //     [
        //         {id: 0, pictureUrl:'', followed: false, fullName: 'Alex',  status: 'hello', location: {city: 'Simf', country: 'Russia'}},
        //         {id: 1, pictureUrl:'', followed: true, fullName: 'Dima',  status: 'hello1', location: {city: 'Minsk', country: 'Belarus'}},
        //         {id: 2, pictureUrl:'', followed: false, fullName: 'David',  status: 'hello2', location: {city: 'Kiev', country: 'Ukraine'}}
        //     ])
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null
                            ? u.photos.small
                            : userPhoto} alt=""/>
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
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;