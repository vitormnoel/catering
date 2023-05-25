import { Fragment } from "react";
import Image from "next/image";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";

function MenuPage() {
  return (
    <Fragment>
      <NavBar />
      <main className="overflow-hidden container m-auto font-thin">
        <section className="mt-40 md:px-32 px-10">
          <h4 className="capitalize text-4xl text-center font-header text-blue-logo mb-10">
            Menus
          </h4>
          <p>
            The menus below are for our Corporate Drop-Off service. If you are
            interested in a Catered Event (What's the difference?), take a look
            at our Catered Events menus. If you're not sure which you want, take
            a look at our guide to different meetings or{" "}
            <Link
              href={"/"}
              className="hover:text-blue-logo duration-300 transition underline underline-offset-4"
            >
              contact our Catering Consultants
            </Link>
            .
          </p>
          <ul className="mt-20 flex flex-col gap-y-10 items-center">
            <li className="w-[50vw] flex gap-x-10">
              <Image src={"/images/1.jpg"} alt="" width={200} height={200} />
              <div>
                <h5 className="uppercase font-normal">breakfast</h5>
                <p>start your day off right!</p>
              </div>
            </li>
            <li className="w-[50vw] flex gap-x-10">
              <Image src={"/images/2.jpg"} alt="" width={200} height={200} />
              <div>
                <h5 className="uppercase font-normal">sandwich & wraps</h5>
                <p>Gourmet - hot and cold made fresh, hand-crafted</p>
              </div>
            </li>
            <li className="w-[50vw] flex gap-x-10">
              <Image src={"/images/4.jpg"} alt="" width={200} height={200} />
              <div>
                <h5 className="uppercase font-normal">sides & snacks</h5>
                <p>customize your meal create your own package</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default MenuPage;
