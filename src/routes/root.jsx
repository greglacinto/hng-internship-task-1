//importing sections
import Profile from '../sections/profile.js';
import Links from '../sections/links.js';
import Social from '../sections/social.js';
import Footer from '../sections/footer.js';


export default function Root() {
    
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