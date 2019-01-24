import React from 'react';
import styles from './TextField.module.less';
import Input from '../Input/Input';

const textField = ( props ) => {
    let className = styles.TextField;
    if(props.value && props.value.length > 0){
        className += " "+styles.Filled;
    }
    return (
        <div className={className} >
            <label className={styles.Label} htmlFor={props.name}>{props.label} {props.required && '*'}</label>
            <Input className={styles.Input}
                type={props.type} 
                name={props.name}
                value={props.value} 
                placeholder={props.placeholder}
                required={props.required}
                onChange={props.onChange}/>
            {props.error &&
            <label className={styles.Error} htmlFor={props.name}>{props.helperText}</label>}
        </div>
    );
}


export default textField;
