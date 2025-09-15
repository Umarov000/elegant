import React from "react";
import freeshipping from "../../assets/freeshipping.svg";
import money from "../../assets/finance-payment.svg";
import contactPhone from "../../assets/contact-phone.svg";
import secure from "../../assets/secure.svg";

const Service = () => {
  return (
    <section>
      <div className="container grid grid-cols-2 gap-2 md:grid-cols-4 py-12 md:gap-6">
        <div className="bg-[#F3F5F7] py-8 md:py-12 px-4 md:px-8">
          <div>
            <img className="w-10 mb-4" src={freeshipping} alt="" />
          </div>
          <div>
            <h3 className="font-poppins font-medium text-[14px] md:text-xl mb-2">
              Free Shipping
            </h3>
            <span className="text-[#6C7275] text-[14px] font-poppins">
              Order above $200
            </span>
          </div>
        </div>
        <div className="bg-[#F3F5F7] py-8 md:py-12 px-4 md:px-8">
          <div>
            <img className="w-10 mb-4" src={money} alt="" />
          </div>
          <div>
            <h3 className="font-poppins font-medium text-[14px] md:text-xl mb-2">
              Money-back
            </h3>
            <span className="text-[#6C7275] text-[14px] font-poppins">
              30 days guarantee
            </span>
          </div>
        </div>
        <div className="bg-[#F3F5F7] py-8 md:py-12 px-4 md:px-8">
          <div>
            <img className="w-10 mb-4" src={secure} alt="" />
          </div>
          <div>
            <h3 className="font-poppins font-medium text-[14px] md:text-xl mb-2">
              Secure Payments
            </h3>
            <span className="text-[#6C7275] text-[14px] font-poppins">
              Secured by Stripe
            </span>
          </div>
        </div>
        <div className="bg-[#F3F5F7] py-8 md:py-12 px-4 md:px-8">
          <div>
            <img className="w-10 mb-4" src={contactPhone} alt="" />
          </div>
          <div>
            <h3 className="font-poppins font-medium text-[14px] md:text-xl mb-2">
              24/7 Support
            </h3>
            <span className="text-[#6C7275] text-[14px] font-poppins">
              Phone and Email support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Service);
