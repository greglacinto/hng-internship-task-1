import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//importing sections
import Profile from './sections/profile.js';
import Links from './sections/links.js';
import Social from './sections/social.js';
import Footer from './sections/footer.js';

class Home extends React.Component {
    render(){
        return (
            <div>
                <main>
                    <Profile />
                    <Links />
                    <Social />
                    <Footer />

                </main>

            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);