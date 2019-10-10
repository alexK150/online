import React from 'react'
import s from './FormControls.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    /*redux-form always sending in Field: meta(touched, error, warning)*/
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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