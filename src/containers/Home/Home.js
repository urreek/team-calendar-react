import React from 'react';
import Auth from '../../services/Auth/Auth';

class Home extends React.Component {

    render(){
        Auth.login();
        return (
            <div>
                <h1 style={{color: "white"}}> Team Calendar </h1>
                <p style={{color: "white"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, odio? Nemo repellendus facilis labore at sequi soluta expedita deleniti laboriosam rem porro, est doloremque iste autem earum eius, ea fugiat.</p>
            </div>
        );
    }
}

export default Home;