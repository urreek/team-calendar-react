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
    }

    switch(props.variant) {
        case 'contained':
            className += " " + styles.contained;
            break;
        case 'outlined':
            className += " " + styles.outlined;
    }

    return (
        <button className={className} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default button;