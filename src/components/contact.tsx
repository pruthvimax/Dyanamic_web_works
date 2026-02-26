import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

// Contact
export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    lookingFor: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // handle form change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // validate form on submit
  const validateForm = () => {
    // form fields
    const { name, mobile, address, lookingFor, message } = form;

    type Current = {
      name: boolean;
      mobile: boolean;
      address: boolean;
      lookingFor: boolean;
      message: boolean;
    };

    // Error message
    const nameError = document.querySelector("#name-error")!;
    const mobileError = document.querySelector("#mobile-error")!;
    const addressError = document.querySelector("#address-error")!;
    const lookingForError = document.querySelector("#lookingFor-error")!;
    const messageError = document.querySelector("#message-error")!;
    const current: Current = { name: false, mobile: false, address: false, lookingFor: false, message: false };

    // validate name
    if (name.trim().length < 3) {
      nameError.classList.remove("hidden");
      current["name"] = false;
    } else {
      nameError.classList.add("hidden");
      current["name"] = true;
    }

    // validate mobile (simple validation)
    if (mobile.trim().length < 10) {
      mobileError.classList.remove("hidden");
      current["mobile"] = false;
    } else {
      mobileError.classList.add("hidden");
      current["mobile"] = true;
    }

    // validate address
    if (address.trim().length < 5) {
      addressError.classList.remove("hidden");
      current["address"] = false;
    } else {
      addressError.classList.add("hidden");
      current["address"] = true;
    }

    // validate lookingFor
    if (lookingFor.trim() === "") {
      lookingForError.classList.remove("hidden");
      current["lookingFor"] = false;
    } else {
      lookingForError.classList.add("hidden");
      current["lookingFor"] = true;
    }

    // validate message
    if (message.trim().length < 5) {
      messageError.classList.remove("hidden");
      current["message"] = false;
    } else {
      messageError.classList.add("hidden");
      current["message"] = true;
    }

    // True if all fields are validated
    return Object.keys(current).every(
      (k) => current[k as keyof typeof current],
    );
  };

  // handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent default page reload
    e.preventDefault();

    // validate form
    if (!validateForm()) return false;

    // show loader
    setLoading(true);

    // send email
    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "DWW",
          mobile_number: form.mobile,
          address: form.address,
          looking_for: form.lookingFor,
          message: form.message,
          to_email: import.meta.env.VITE_APP_EMAILJS_RECIEVER,
        },
        import.meta.env.VITE_APP_EMAILJS_KEY,
      )
      .then(() => toast.success("Thanks for contacting me."))
      .catch((error) => {
        // Error handle
        console.log("[CONTACT_ERROR]: ", error);
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
        setForm({
          name: "",
          mobile: "",
          address: "",
          lookingFor: "",
          message: "",
        });
      });
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          {/* Title */}
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {/* Name */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name*</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                title="What's your name?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Name */}
              <span className="text-red-400 mt-2 hidden" id="name-error">
                Invalid Name!
              </span>
            </label>

            {/* Mobile Number */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Mobile Number*</span>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter Your Mobile Number"
                title="What's your mobile number?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Mobile */}
              <span className="text-red-400 mt-2 hidden" id="mobile-error">
                Invalid Mobile Number!
              </span>
            </label>

            {/* Address */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Address*</span>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter Your Address"
                title="What's your address?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Address */}
              <span className="text-red-400 mt-2 hidden" id="address-error">
                Invalid Address!
              </span>
            </label>

            {/* Looking For */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Looking For*</span>
              <input
                type="text"
                name="lookingFor"
                value={form.lookingFor}
                onChange={handleChange}
                placeholder="Website/Application/Other Service"
                title="What service are you looking for?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Looking For */}
              <span className="text-red-400 mt-2 hidden" id="lookingFor-error">
                Invalid Selection!
              </span>
            </label>

            {/* Message */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message*</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hello there!"
                title="What do you want to say?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60 disabled:resize-none"
              />

              {/* Invalid Message */}
              <span className="text-red-400 mt-2 hidden" id="message-error">
                Invalid Message!
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              title={loading ? "Sending..." : "Send"}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:bg-tertiary/20 disabled:text-white/60"
              disabled={loading}
              aria-disabled={loading}
            >
              {/* check loader state */}
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Earth Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};