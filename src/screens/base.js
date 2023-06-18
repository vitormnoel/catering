import { Fragment } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function Page({ children, banner }) {
  return (
    <Fragment>
      <Header banner={banner}/>
      <main className="overflow-hidden font-thin">{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Page;
