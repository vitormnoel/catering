import Page from "../base";
import LocationSection from "../../components/location/location-component";
import StoryComponent from "../../components/story/story-component";

function CompanyPage() {
  return (
    <Page banner={false}>
      <StoryComponent />
      <LocationSection />
    </Page>
  );
}

export default CompanyPage;
