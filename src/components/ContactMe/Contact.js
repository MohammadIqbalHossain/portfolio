import React from 'react';

const Contact = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">

                <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form
                        action="https://formsubmit.co/mdiqbalhossain5170@gmail.com" method="POST">
                        {/* <input type="text" name="name" required /> */}
                        <div class="form-control w-full max-w-lg">
                            <label class="label">
                                <span class="label-text">What is your name?</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" class="input input-bordered w-full max-w-lg" required/>
                        </div>


                        {/* <input type="email" name="email" required /> */}
                        <div class="form-control w-full max-w-lg">
                            <label class="label">
                                <span class="label-text">What is your email?</span>
                            </label>
                            <input type="text" name="email" placeholder="Your email" class="input input-bordered w-full max-w-lg" required/>
                        </div>

                        <div class="form-control w-full max-w-lg">
                            <label class="label">
                                <span class="label-text">Your message.</span>
                            </label>
                            <textarea placeholder="Your Message" class="input input-bordered w-full max-w-lg"name="message" rows="10" col="20" required></textarea>
                        </div>

                        <button className="btn btn-primary w-full my-5" type="submit">Send Email</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Contact;