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

          <h5 className="mt-20 capitalize text-2xl font-header">1. Drop-Off Menus</h5>
          
          <ul className="mt-10 flex flex-col gap-y-10 items-center">
            
          </ul>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default MenuPage;
