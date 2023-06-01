import path from "path";
import fs from "fs/promises";

import MenuPage from '../screens/menu'

function Menu(props) {
    return(
        <MenuPage drop={props.drop} catering={props.catering}/>
    )
}


export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "data", "menus.json");
    const jsonData = await fs.readFile(filePath);
  
    const data = JSON.parse(jsonData);
  
    return {
      props: {
        drop: data.drop,
        catering: data.catering,
      },
    };
  }

export default Menu;