import React from "react";

function Contact() {
  return (
    <section>
      <h2>Get in Touch</h2>
      <p>
        Feel free to contact me using the form below or reach out directly via email or phone.
      </p>
      <ul>
        <li><strong>Name:</strong> Hengyi Song</li>
        <li><strong>Email:</strong> <a href="mailto:grantshy@bu.edu">grantshy@bu.edu</a></li>
        <li><strong>Phone:</strong> 6175181575</li>
      </ul>
      <form
        id="contact-form"
        action="https://formspree.io/f/mrbgvllr"
        method="POST"
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
