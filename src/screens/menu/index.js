import Page from "../base";
import Menu from "../../components/catering-menus/menu";

function MenuPage(props) {
  return (
    <Page banner={false}>
      <Menu drop={props.drop} catering={props.catering}/>
    </Page>
  );
}

export default MenuPage;
