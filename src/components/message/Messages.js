import React from 'react';
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

//UNUSED (instead Posts)

const Messages = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialogName + ' ' + s.active}>
                    <NavLink to='/messages/1'>Alex</NavLink>
                </div>
                <div className={s.dialogName}>
                    <NavLink to='/messages/2'>Katya</NavLink>
                </div>
                <div className={s.dialogName}>
                    <NavLink to='/messages/3'>Pasha</NavLink>
                </div>
                <div className={s.dialogName}>
                    <NavLink to='/messages/4'>Sveta</NavLink>
                </div>
                <div className={s.dialogName}>
                    <NavLink to='/messages/5'>Tanya</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Hello World!</div>
            </div>
        </div>
    );
};

export default Messages;