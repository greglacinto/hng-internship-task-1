import React from 'react';
import {Link} from 'react-router-dom';


class Links extends React.Component {
    render(){
        return (
            <section id="links">
                <button><a href="https://twitter.com/Greg_lacinto20">Twitter Link</a></button>
                <button><a id="btn__zuri" href="https://training.zuri.team">Zuri Team</a></button>
                <button><a id="books" href="http://books.zuri.team">Zuri Books </a></button>
                <button><a href="https://books.zuri.team/python-for-beginners?ref_id=Gregory%20Odiase" id="book__python">Python books</a></button>
                <button><a href="https://background.zuri.team" id="pitch">Validate developer's background</a></button>
                <button><a href="https://books.zuri.team/design-rules" id="book__design">Get A Free Design Book</a></button>
                <button><Link to={`contact/`} id="contact">Contact Me</Link></button>
            </section>
        )
    }
}

export default Links