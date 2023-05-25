import { Fragment } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Page({ children }) {
  return (
    <Fragment>
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Page;
