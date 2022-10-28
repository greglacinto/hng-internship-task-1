import React from 'react';
import ReactDOM from 'react-dom/client';

class Home extends React.Component {
    render(){
        return (
            <div>
                <main>
                    <p>App still works!</p>
                </main>

            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);