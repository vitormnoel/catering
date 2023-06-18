import path from "path";
import fs from "fs/promises";

import VenuesPage from "../screens/venues";

function Venues(props) {
  return <VenuesPage locations={props.locations} />;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "locations.json");
  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);

  return {
    props: {
      locations: data.locations,
    },
  };
}

export default Venues;
