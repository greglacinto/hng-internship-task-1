import React from 'react';
import ReactDOM from 'react-dom/client';

//importing profile
import Profile from './sections/profile.js';
import Links from './sections/links.js';
import Social from './sections/social.js';

class Home extends React.Component {
    render(){
        return (
            <div>
                <main>
                    <Profile />
                    <Links />
                    <Social />

                </main>

            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);