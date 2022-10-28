import React from 'react';
import profileImg from '../images/profilePicture.png';

class Profile extends React.Component {
    render() {
        return (
            <section id="profile" class="flex-container">
                <div>
                    <img id="profile_img" src={profileImg} alt="profile"/>
                </div>
                <p id="twitter">Gregory Odiase</p>
                <p style={{display: "none"}} id="slack">gregory.js</p>
            </section>
        );
    }
}

export default Profile