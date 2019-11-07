import React from 'react';
import s from './Pagination.module.css';

const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
    </div>
}

export default Pagination;