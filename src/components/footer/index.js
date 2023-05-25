import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { BsTelephone } from "react-icons/bs";
import { TbBuildingStore } from "react-icons/tb";

function Footer() {
  return (
    <footer className="container mb-5 w-full m-auto mt-32 font-thin">
      <div className="flex flex-col ml-11 gap-10 md:flex-row place-content-between">
      <div className="">
        <h1 className="">
          <Image
            src={"/images/waiter.png"}
            width={50}
            height={50}
            alt="Company's logo"
            style={{ width: 50, height: 50 }}
          />
        </h1>
        <a className="pt-6 flex items-center gap-2" href="tel:+16045431234">
          <BsTelephone /> +1 604-543-1234
        </a>
        <div className="pt-6 flex items-start gap-2">
          <TbBuildingStore className="mt-1" />
          <address className="md:max-w-[150px] text-start">
            290 London St #01, Vancouver, BC V6A 0P4, Canada
          </address>
        </div>

        <p className="pt-6 pb-2 font-normal text-stone-600 text-center">Follow us:</p>
        <ul className="flex gap-6 justify-center">
          <li>
            <Link href={"/"} target="_blank">
              <FaLinkedinIn
                size={28}
                className="hover:text-stone-500 text-blue-logo duration-300 transition"
              />
            </Link>
          </li>

          <li>
            <Link href={"/"} target="_blank">
              <FaYoutube
                size={28}
                className="hover:text-stone-500 text-blue-logo duration-300 transition"
              />
            </Link>
          </li>
          <li>
            <Link href={"/"} target="_blank">
              <FaFacebook
                size={28}
                className="hover:text-stone-500 text-blue-logo duration-300 transition"
              />
            </Link>
          </li>
          <li>
            <Link href={"/"} target="_blank">
              <FaInstagram
                size={28}
                className="hover:text-stone-500 text-blue-logo duration-300 transition"
              />
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="">
        <h5 className="pb-4 font-normal">Trusted for</h5>
        <ul className="grid grid-cols-2 gap-y-2 text-sm">
          <li className="cursor-pointer hover:text-blue-logo">
            Breakfast & Lunch
          </li>
          <li className="cursor-pointer hover:text-blue-logo">
            Corporate Training Events
          </li>
          <li className="cursor-pointer hover:text-blue-logo">
            Lunch & Learn Sessions
          </li>
          <li className="cursor-pointer hover:text-blue-logo">
            Half-full Day Sessions
          </li>
          <li className="cursor-pointer hover:text-blue-logo">
            Corporate Celebrations
          </li>
          <li className="cursor-pointer hover:text-blue-logo">
            Celebrations opf Life & Memorials
          </li>
          <li className="cursor-pointer hover:text-blue-logo">BBQ Events</li>
        </ul>
      </div>

      <div className="">
        <h5 className="pb-4 font-normal">Service Areas</h5>
        <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
          <li className="cursor-pointer hover:text-blue-logo">Vancouver</li>
          <li className="cursor-pointer hover:text-blue-logo">Surrey</li>
          <li className="cursor-pointer hover:text-blue-logo">Burnaby</li>
          <li className="cursor-pointer hover:text-blue-logo">Richmond</li>
          <li className="cursor-pointer hover:text-blue-logo">North Shore</li>
          <li className="cursor-pointer hover:text-blue-logo">
            North Vancouver
          </li>
          <li className="cursor-pointer hover:text-blue-logo">Coquitlam</li>
          <li className="cursor-pointer hover:text-blue-logo">Delta</li>
          <li className="cursor-pointer hover:text-blue-logo">
            New Westminster
          </li>
          <li className="cursor-pointer hover:text-blue-logo">Coquitlam</li>
          <li className="cursor-pointer hover:text-blue-logo">Langley</li>
          <li className="cursor-pointer hover:text-blue-logo">UBC</li>
          <li className="cursor-pointer hover:text-blue-logo">Port Moody</li>
        </ul>
      </div>
      </div>
      <p className="mt-10 text-sm text-center lg:text-start">&copy; 2023 - Catering</p>
    </footer>
  );
}

export default Footer;
