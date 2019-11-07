import React from 'react';
import s from './FormControls.module.css';

const FormControl = ({input, meta: {touched, error}, children}) => {
    /*redux-form always sending in Field: meta(touched, error, warning)*/
    const hasError = touched && error;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

//custom textarea for fields
export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        <textarea {...restProps} element={'textarea'}/>
    </FormControl>
}
//custom input
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        <input {...input} {...restProps} element={'input'}/>
    </FormControl>

}