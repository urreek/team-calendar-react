import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Logo.module.less';

const logo = ( props ) => (
    <div className={styles.Logo}>
        <NavLink exact={true} to="/" activeClassName={styles.active}>   
                TEAM CALENDAR
        </NavLink>
    </div>
);

export default logo;