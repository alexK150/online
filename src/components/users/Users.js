import React from 'react';
import Pagination from "../../common/pagination/Pagination";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <Pagination
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
        />
        {
            props.users.map(u => <User
                key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
            />)
        }
    </div>
}

export default Users;