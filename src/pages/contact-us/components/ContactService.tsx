import img from "../../../assets/Vector.svg";
import img2 from "../../../assets/call.png";
import img3 from "../../../assets/money.png";
import img4 from "../../../assets/lock.png";

const ContactService = () => {
  return (
    <section className="mt-20 bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <div className="flex flex-col items-center text-center gap-2">
          <img src={img} alt="Free Shipping" className="w-10 h-10" />
          <h3 className="text-lg font-semibold">Free Shipping</h3>
          <p className="text-sm text-gray-600">Order above $200</p>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <img src={img3} alt="Money-back" className="w-10 h-10" />
          <h3 className="text-lg font-semibold">Money-back</h3>
          <p className="text-sm text-gray-600">30 days guarantee</p>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <img src={img4} alt="Secure Payments" className="w-10 h-10" />
          <h3 className="text-lg font-semibold">Secure Payments</h3>
          <p className="text-sm text-gray-600">Secured by Stripe</p>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <img src={img2} alt="24/7 Support" className="w-10 h-10" />
          <h3 className="text-lg font-semibold">24/7 Support</h3>
          <p className="text-sm text-gray-600">Phone and Email support</p>
        </div>
      </div>
    </section>
  );
};

export default ContactService;
