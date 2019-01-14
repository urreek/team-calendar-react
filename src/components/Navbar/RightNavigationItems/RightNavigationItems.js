import React from 'react';
import styles from './RightNavigationItems.module.less';
import NavigationItem from '../NavigationItem/NavigationItem';

const rightNavigationItems = () => (
    <ul className={styles.RightNavigationItems}>
        <NavigationItem link="/register"> Register </NavigationItem>
        <NavigationItem link="/login"> Login </NavigationItem>
    </ul>
);

export default rightNavigationItems;