export default function ContactMeForm() {
    return (
        <main id="main-contact">
            <section class= "text-color">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>

                <form action="">
                    <div id="contact-form" class="flex-container">
                        <div id="name-div">

                            <div class="w-80 ">
                                <label for="first_name">First Name</label><br />
                                <input type="text" name="first_name" id="first_name" required placeholder="Enter your first name" />
                            </div>

                            <div class="w-80">
                                <label for="last_name">Last Name</label><br />
                                <input type="text" name="last_name" id="last_name" required placeholder="Enter your last name" />
                            </div>
                        </div>

                        <div id="email-div">
                            <label for="email">Email</label><br/>
                            <input type="email" name="email" id="email" required placeholder="yourname@email.com"/>
                        </div>

                        <div id="msg-div">
                            <label for="message">Message</label><br/>
                            <textarea name="message" id="message" cols="30" rows="10" required placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>
                        </div>

                        <div id="check-div">
                            <input type="checkbox" id="check" name="check"/>
                            <label for="check">You agree to providing your data to Gregory who may contact you.</label>
                        </div>

                        <div id="btn-div">
                            <input type="submit" id="btn__submit" value="Send message"/>
                        </div>
                    </div>

                </form>
            </section>
        
        </main>
    );
}