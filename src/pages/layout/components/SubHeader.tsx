import { memo, useState } from "react";
import ticketPercentIcon from "../../../assets/ozodbek_ticket_percent.svg";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

const SubHeader = () => {
  const [hide, setHide] = useState(true);
  return (
    <div
      style={hide ? {} : { display: "none" }}
      className="SubHeader flex items-center bg-[#F3F5F7] h-10 text-[14px] font-semibold"
    >
      <div className="flex gap-3 items-center mx-auto">
        <img src={ticketPercentIcon} alt="ticket percent" />
        <h2>30% off storewide — Limited time!</h2>
        <Link className="text-[#377DFF] flex items-center gap-1" to="/shop">
          Shop Now
          <span>
            <GrFormNextLink />
          </span>
        </Link>
      </div>
      <button
        onClick={() => setHide(false)}
        className="mr-4 hover:cursor-pointer"
      >
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default memo(SubHeader);
