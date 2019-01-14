import React from 'react';
import styles from './Header.module.less';

const header = ( props ) => (
    <header className={styles.Header}>
        {props.children}
    </header>
);

export default header;
