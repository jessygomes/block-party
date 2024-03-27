"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    fonction: "",
    objet: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2wk87pr",
        "template_u9m00rn",
        e.target,
        "OQpdfRliSb-itPKwp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setForm({
            name: "",
            fonction: "",
            objet: "",
            email: "",
            message: "",
          });
          setConfirmationMessage("Email envoyé avec succès !");
          setTimeout(() => {
            setConfirmationMessage("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="h-[10rem] gradient-bg flex justify-center items-end">
        <h1 className="text-white pt-[2rem]  pb-[1rem] text-[2rem] sm:text-[3rem] font-bison">
          CONTACTEZ-NOUS
        </h1>
      </div>
      <div className="bg-[#231f20] h-[3rem]"></div>
      <section className=" mt-[3rem] px-[1rem] flex flex-col sm:flex-wrap justify-center items-center gap-[2rem] sm:gap-[1.5rem] sm:px-[10rem] lg:px-[15rem]">
        <p className=" font-rubikLight text-center">
          Vous avez des questions ou vous souhaitez devenir bénévole ?
          Contactez-nous !
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col gap-5 relative"
        >
          {confirmationMessage && (
            <p className="text-white font-aldrich text-center">
              {confirmationMessage}
            </p>
          )}
          <p className="text-[#231f20] font-rubikMedium tracking-[0.1rem] text-center">
            blockpartyfestival@gmail.com
          </p>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="NOM & PRENOM"
              className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-[#231f20] bg-opacity-10 text-[#231f20] text-center rounded-1rem focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
              onChange={handleChange}
              value={form.name}
              minLength="2"
              maxLength="30"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="fonction"
              name="fonction"
              placeholder="FONCTION"
              className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-[#231f20] bg-opacity-10 text-[#231f20] text-center rounded-1rem focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
              onChange={handleChange}
              value={form.fonction}
              minLength="2"
              maxLength="20"
            />
          </div>
          <div>
            <input
              type="text"
              id="objet"
              name="objet"
              placeholder="OBJET"
              className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-[#231f20] bg-opacity-10 text-[#231f20] text-center rounded-1rem focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
              onChange={handleChange}
              value={form.objet}
              minLength="2"
              maxLength="20"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="EMAIL"
              className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-[#231f20] bg-opacity-10 text-[#231f20] text-center rounded-1rem focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="MESSAGE"
              className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-[#231f20] bg-opacity-10 text-[#231f20] text-center rounded-1rem focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
              onChange={handleChange}
              value={form.message}
              required
              minLength="2"
              maxLength="350"
            />
          </div>
          <button
            type="submit"
            className="p-[0.5rem] text-white font-bison tracking-[0.3rem] gradient-bg from-black-800 to-zinc-600 rounded-1rem focus:outline-none focus:ring-2 focus:ring-[#fa798f] transition-all duration-300 ease-in-out hover:from-[#fa798f] hover:[#fa798f] hover:ring-2 hover:ring-[#fa798f] hover:shadow-xl"
          >
            ENVOYER
          </button>
        </form>
      </section>
    </div>
  );
}
