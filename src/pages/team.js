import path from "path";
import fs from "fs/promises";

import TeamPage from "../screens/team";

function Team(props) {
  return <TeamPage team={props.team} />;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "team.json");
  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);

  return {
    props: {
      team: data.team,
    },
  };
}

export default Team;
