import CateredEvents from "../../components/catering-menus/catered-events";
import Page from "../base";

function CateredPage() {
  return (
    <Page banner={false}>
      <CateredEvents/>
    </Page>
    
  );
}

export default CateredPage;
