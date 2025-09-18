import { NavLink } from "react-router-dom";
import hero from "../../../assets/contact-hero.png";

const ContactHero = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-[720px] text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-[54px] font-semibold leading-snug">
          We believe in sustainable decor. We're passionate about life at home.
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-[16px] text-gray-700">
          Our features timeless furniture, with natural fabrics, curved lines,
          plenty of mirrors and classic design, which can be incorporated into
          any decor project. The pieces enchant for their sobriety, to last for
          generations, faithful to the shapes of each period, with a touch of
          the present
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-6 md:gap-0">
        <img
          src={hero}
          alt=""
          className="w-full h-60 sm:h-80 md:h-full object-cover"
        />

        <div className="bg-[#F3F5F7] p-6 sm:p-8 md:pt-[100px] md:pb-[150px] md:pl-[70px] md:pr-[35px] flex flex-col text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-[40px] font-semibold">
            About Us
          </h3>
          <p className="mt-2 text-sm sm:text-base md:text-[16px]">
            3legant is a gift & decorations store based in HCMC,
            <br /> Vietnam. Est since 2019.
            <br />
            Our customer service is always prepared to support you <br /> 24/7
          </p>
          <NavLink
            to="/contact-us"
            className="mt-4 font-semibold text-black underline mx-auto md:mx-0"
          >
            Shop Now
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
