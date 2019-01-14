import React from 'react';
import styles from './NavigationItem.module.less';
import { NavLink } from "react-router-dom";

const navigationItem = ( props ) => (
    <NavLink exact={true} to={props.link} activeClassName={styles.active}>   
        <li className={styles.NavigationItem}>
            {props.children}
        </li>
    </NavLink >
);

export default navigationItem;