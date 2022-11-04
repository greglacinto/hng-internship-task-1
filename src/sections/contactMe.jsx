export default function ContactMeForm() {
    return (
        <main id="main-contact">
            <section class= "text-color">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>

                <form action="
                ">
                    <div id="contact-form" class="flex-container">
                        <div id="name-div">
                            <div class="w-80 ">
                                <label for="fname">First Name</label><br />
                                <input type="text" name="fname" id="fname" required placeholder="Enter your first name" />
                            </div>
                            <div class="w-80">
                                <label for="lname">Last Name</label><br />
                                <input type="text" name="lname" id="lname" required placeholder="Enter your last name" />
                            </div>
                        </div>
                        <div id="email-div">
                        <label for="email">Email</label><br/>
                        <input type="email" name="email" id="email" required placeholder="yourname@email.com"/>
                        </div>
                        <div id="msg-div">
                            <label for="msg">Message</label><br/>
                            <textarea name="msg" id="msg" cols="30" rows="10" required placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>
                        </div>
                        <div id="check-div">
                            <input type="checkbox" id="check" name="check"/>
                            <label for="check">You agree to providing your data to Gregory who may contact you.</label>
                        </div>
                        <div id="btn-div">
                            <input type="submit" value="Send message"/>
                        </div>
                    </div>

                </form>
            </section>
        
        </main>
    );
}