import React from 'react';
import styles from './LeftNavigationItems.module.less';
import NavigationItem from '../NavigationItem/NavigationItem';

const leftNavigationItems = () => (
    <ul className={styles.LeftNavigationItems}>
        <NavigationItem link="/"> Home </NavigationItem>
        <NavigationItem link="/about"> About </NavigationItem>
        <NavigationItem link="/contact"> Contact </NavigationItem>
    </ul>
);

export default leftNavigationItems;