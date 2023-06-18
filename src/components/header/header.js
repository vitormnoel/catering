import NavBar from "../navbar/navbar";
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
