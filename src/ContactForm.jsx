import emailjs from "emailjs-com";

export default function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_n",
      "template_11",
      e.target,
      "gotT6wdnQT83tni_8"
    )
    .then(() => {
      alert("Message sent successfully!");
      e.target.reset();
    })
    .catch(() => {
      alert("Failed to send message");
    });
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4 text-left">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        required
        pattern="[0-9]+"
        className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
      />

      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded font-semibold"
      >
        Send Message
      </button>
    </form>
  );
}