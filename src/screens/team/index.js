import TeamComponent from "../../components/team/team-component";
import Page from "../base";

function TeamPage(props) {
  return (
    <Page banner={false}>
      <TeamComponent team={props.team}/>
    </Page>
  );
}

export default TeamPage;
