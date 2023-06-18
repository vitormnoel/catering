import Page from "../base";
import CateringMenus from "../../components/catering-menus/catering-component";
import Info from "../../components/info/info-component";
import Newsletter from "../../components/news/news-component";
import Clients from "../../components/clients/clients-component";
import VideoSection from "../../components/video/video-component";
import LocationSection from "../../components/location/location-component";
import TestimonialSection from "../../components/testimonials/testimonials-component";

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
