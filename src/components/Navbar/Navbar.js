import React from 'react';

import Logo from '../Logo/Logo';
import styles from './Navbar.module.less';
import LeftNavigationItems from './LeftNavigationItems/LeftNavigationItems';
import RightNavigationItems from './RightNavigationItems/RightNavigationItems';

const navbar = ( ) => (
    <nav className={styles.Navbar}>
        <div className={styles.Navbar__left}>
            <Logo />
            <LeftNavigationItems />
        </div>
        <div>
            <RightNavigationItems />
        </div>
    </nav>
);

export default navbar;