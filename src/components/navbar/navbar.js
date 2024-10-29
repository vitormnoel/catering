import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "about us",
      url: "/",
      sub: [
        { name: "our story", url: "/our-story" },
        { name: "our team", url: "/our-team" },
      ],
    },
    {
      name: "menus",
      url: "/menus",
      sub: [{ name: "catering", url: "/menus" }],
    },
    {
      name: "catered events",
      url: "/catered-events",
      sub: [{ name: "a", url: "/catered-events" }],
    },
    {
      name: "faqs",
      url: "/faqs",
      sub: [{ name: "faqs", url: "/our-story" }],
    },
  ];

  return (
    <div className="w-full shadow-sm flex items-center place-content-around pt-8 pb-2 backdrop-blur-sm bg-white/90 top-0 fixed z-10">
      <h1>
        <Link href="/">
          <Image
            src={"/images/waiter.png"}
            width={50}
            height={50}
            alt="Company's logo"
            style={{ width: 50, height: 50 }}
          />
        </Link>
      </h1>

      <nav>
        <ul className="flex gap-10 text-md uppercase font-thin text-slate-700 hidden md:block">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                onMouseEnter={() => setIsOpen((prev) => !prev)}
                href={link.url}
              >
                {link.name}
              </Link>
              {/* {isOpen && (
                <div onMouseLeave={() => setIsOpen((prev) => !prev)} className="bg-white shadow-lg text-black absolute top-18 w-[10vw] h-[100px] p-4 rounded-lg mt-4">
                  {link.sub.map((item, index) => (
                    <Link key={index} href={item.url}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )} */}
            </li>
          ))}
        </ul>
      </nav>

      <Link href="/contact">
        <p className="cursor-pointer text-blue-logo hover:bg-blue-logo hover:text-white uppercase border-2 border-blue-logo px-4 p-2 duration-300 transition">
          request a quote
        </p>
      </Link>
    </div>
  );
}

export default NavBar;
