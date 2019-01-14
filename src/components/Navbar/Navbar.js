import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.less';
import LeftNavigationItems from './LeftNavigationItems/LeftNavigationItems';
import RightNavigationItems from './RightNavigationItems/RightNavigationItems';

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
                    <LeftNavigationItems />
                </div>
                <div>
                    <RightNavigationItems />
                </div>
            </nav>
        );
    }
}

export default Navbar;