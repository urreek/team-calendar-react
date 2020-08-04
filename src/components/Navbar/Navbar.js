import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.less';
import NavigationItem from './NavigationItem/NavigationItem';
import Button from '../UI/Button/Button';

class Navbar extends React.Component {

    state = {
        isTransparent: true
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTransparent = window.scrollY < 60;
            if(isTransparent !== this.state.isTransparent) {
                this.setState({ isTransparent });
            }
        });
    }

    render() {
        let style = null;
        if(!this.state.isTransparent){
            style = styles.Fade;        
        }

        return (
            <nav className={`${styles.Navbar} ${style}`}>
                <div className={styles.Navbar__left}>
                    <Logo />
                    <ul className={styles.LeftNavigationItems}>
                        <NavigationItem link="/"> Home </NavigationItem>
                        <NavigationItem link="/about"> About </NavigationItem>
                        <NavigationItem link="/contact"> Contact </NavigationItem>
                    </ul>
                </div>
                <div>
                    <ul className={styles.RightNavigationItems}>
                        {this.props.user ? (
                            <NavigationItem link="/profile"> {this.props.user.sub} </NavigationItem>
                        ) : (
                            <React.Fragment>
                                <NavigationItem link="/register"> Register </NavigationItem>
                                <NavigationItem link="/login"> Login </NavigationItem>
                            </React.Fragment>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;