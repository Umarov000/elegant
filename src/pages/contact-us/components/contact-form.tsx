import { memo } from "react";
import contact_logo from "../../../assets/ozodbek_contact.svg";
const ContactForm = () => {
  return (
    <div className="ContactForm">
      <form
        className="max-w-160 border p-20 mx-auto mt-20 rounded-2xl shadow-2xl"
        action=""
      >
        <div className="grid gap-4">
          <img className="w-50 mx-auto" src={contact_logo} alt="contact" />
          <input
            className="rounded  border h-10 indent-4"
            type="text"
            name="name"
            id=""
            placeholder="fullname"
          />
          <input
            className=" rounded  border h-10 indent-4"
            type="email"
            name=""
            id=""
            placeholder="email"
          />
          <textarea
            className="rounded  border indent-4"
            name=""
            id=""
            placeholder="message"
          ></textarea>
          <button className="rounded  border h-10 mt-5 bg-[#141718] text-white">
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(ContactForm);
