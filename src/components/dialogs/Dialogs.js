import React from 'react';
import DialogsPage from '../dialogsPage/DialogsPage'
import Posts from '../posts/Posts'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            {/*<DialogsPage/>*/}
            <Posts/>
        </div>
    )
}

export default Dialogs