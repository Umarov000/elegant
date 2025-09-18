import { MapPin, Phone, Mail } from "lucide-react";

const ContactUsCom = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-100  p-6 text-center h-[156px]">
          <MapPin className="mx-auto mb-2 w-6 h-6" />
          <h4 className="font-semibold mb-1">ADDRESS</h4>
          <p className="text-sm text-gray-600">
            234 Hai Trieu, Ho Chi Minh City, Viet Nam
          </p>
        </div>
        <div className="bg-gray-100  p-6 text-center h-[156px]">
          <Phone className="mx-auto mb-2 w-6 h-6" />
          <h4 className="font-semibold mb-1">CONTACT US</h4>
          <p className="text-sm text-gray-600">+84 234 567 890</p>
        </div>
        <div className="bg-gray-100  p-6 text-center h-[156px]">
          <Mail className="mx-auto mb-2 w-6 h-6" />
          <h4 className="font-semibold mb-1">EMAIL</h4>
          <p className="text-sm text-gray-600">hello@3legant.com</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">FULL NAME</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-md px-3 py-2 text-sm "
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-md px-3 py-2 text-sm "
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">MESSAGE</label>
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full border rounded-md px-3 py-2 text-sm "
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-black text-white text-sm font-mefdium"
          >
            Send Message
          </button>
        </form>

        <div className="rounded-md overflow-hidden h-80">
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3Ad5dfbcb2f143622f16dff3b86b98a8f7a9c0e98751c51d03a9b8c1b8f7d1d3f6&amp;source=constructor"
            width="100%"
            height="100%"
            title="Yandex Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCom;
