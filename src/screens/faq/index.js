import FaqComponent from "../../components/faq/faq-component";
import Page from "../base";

function FaqPage() {
  return (
    <Page banner={false}>
      <FaqComponent />
    </Page>
  );
}

export default FaqPage;
