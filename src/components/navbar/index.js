import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <div className="w-full shadow-sm flex items-center place-content-around pt-8 pb-2 bg-white top-0 fixed z-10">
      <h1>
        <Image
          src={"/images/waiter.png"}
          width={50}
          height={50}
          alt="Company's logo"
          style={{ width: 50, height: 50 }}
        />
      </h1>

      <nav>
        <ul className="flex gap-10 text-md uppercase font-thin text-slate-700">
          <li>
            <Link href="/">about us</Link>
          </li>
          <li>
            <Link href="menus">menus</Link>
          </li>
          <li>
            <Link href="catered-events">catered events</Link>
          </li>
          <li>
            <Link href="/">faqs</Link>
          </li>
        </ul>
      </nav>
      <p
        className="cursor-pointer text-blue-logo hover:bg-blue-logo hover:text-white uppercase border-2 border-blue-logo px-4 p-2 rounded-lg duration-300 transition"
      >
        request a quote
      </p>
    </div>
  );
}

export default NavBar;
