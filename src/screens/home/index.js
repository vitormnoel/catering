import Page from "../base";
import CateringMenus from "../../components/catering-menus";
import Info from "../../components/info";
import Newsletter from "../../components/news";
import Clients from "../../components/clients";
import VideoSection from "../../components/video";
import LocationSection from "../../components/location";
import TestimonialSection from "../../components/testimonials";

function HomePage(props) {
  return (
    <Page banner={true}>
      <CateringMenus menus={props.menus} />
      <Info content={props.info} />
      <Clients client={props.client} />
      <TestimonialSection testimonials={props.testimonials}/>
      <Newsletter />
      <VideoSection />
      <LocationSection />
    </Page>
  );
}

export default HomePage;
