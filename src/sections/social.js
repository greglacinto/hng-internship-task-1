import React from 'react';

//import images
import slackImg from '../images/slack.svg';
import gitHubImg from '../images/Social icon.svg'

class Social extends React.Component {
    render() {
        return (
            <section id="social">
            <div>
                <a href="https://app.slack.com/client/T042F7V19Q8/D0483V603HU/rimeto_profile/U0487K02EHK">
                    <img src={slackImg} alt="slack icon"/>
                </a>
            </div>
            <div>
                <a href="https://github.com/greglacinto">
                    <img src={gitHubImg} alt="github icon"/>
                </a>  
            </div>
        </section>
        )
    }
}

export default Social