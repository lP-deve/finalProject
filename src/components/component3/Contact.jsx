
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Contact.css";


const schema = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup.string().email("Invalid email.").required("Email is required."),
  message: yup.string().required("Message is required."),
});

 function Contact(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Message sent successfully!");
  };

  return (
    <section>
      <div className="greyLine" id="line"></div>

      <div className="contact">
        <h2>Get in Touch</h2>
        <div className="aboutMe">
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a company in
            <strong> London</strong>. But I’m also happy to hear about opportunities
            that don’t fit that description. I’m a hard-working and positive person
            who will always approach each task with a sense of purpose and attention
            to detail. Please do feel free to check out my online profiles below and
            get in touch using the form.
          </p>
          <div className="socials">
            <img src="/Path(2).svg" alt="github" />
            <img src="/Path(3).svg" alt="twitter" />
            <img src="/Shape(1).svg" alt="linkedin" />
          </div>
        </div>
      </div>

      <div className="greyLine"></div>

      <div className="contact">
        <h2>Contact Me</h2>
        <div className="fomrs">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="inp1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Jane Appleseed"
                {...register("name")}
                className={errors.name ? "error-border" : ""}
              />
              {errors.name && <p className="error-msg">{errors.name.message}</p>}
            </div>

            <div className="inp1">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                {...register("email")}
                className={errors.email ? "error-border" : ""}
              />
              {errors.email && <p className="error-msg">{errors.email.message}</p>}
            </div>

            <div className="inp1">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="How can I help?"
                {...register("message")}
                className={errors.message ? "error-border" : ""}
              ></textarea>
              {errors.message && <p className="error-msg">{errors.message.message}</p>}
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact
