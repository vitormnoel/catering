import VenuesComponent from "../../components/venues/venues-component";
import Page from "../base";

function Venues(props) {
  return (
    <Page banner={false}>
      <VenuesComponent locations={props.locations}/>
    </Page>
  );
}

export default Venues;
