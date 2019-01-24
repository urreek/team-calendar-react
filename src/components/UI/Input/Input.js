import React from 'react';
import styles from './Input.module.less';

const input = ( props ) => (
    <div className={styles.Input}>
        <input  {...props}/>
    </div>
);

export default input;
