import NavBar from "../navbar";
import Head from "next/head";
import Banner from "./banner";

function Header({ banner }) {
  
  return (
    <header className="">
      <NavBar />
      {banner && <Banner />}
    </header>
  );
}

export default Header;
