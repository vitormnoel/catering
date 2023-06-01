import path from "path";
import fs from "fs/promises";

import Home from '../screens/home';

function HomePage(props) {
  
  return (
    <Home menus={props.menus} info={props.info} client={props.clients} testimonials={props.testimonials}/>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy_data.json");
  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);

  return {
    props: {
      menus: data.menu,
      info: data.info,
      clients: data.clients,
      testimonials: data.testimonials,
    },
  };
}

export default HomePage;