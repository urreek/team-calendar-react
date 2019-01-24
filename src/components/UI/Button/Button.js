import React from 'react';
import styles from './Button.module.less';

const button = ( props ) => {
    let className = styles.button;
    
    switch(props.color) {
        case 'primary':
            className += " " + styles.primary;
            break;
        case 'secondary':
            className += " " + styles.secondary;
            break;
        default:
            className += " " + styles.primary;
    }

    return (
        <button className={className} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default button;