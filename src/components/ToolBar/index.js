import {
  Container,
  Row,
  Input,
  Divider,
  Menu,
  MenuText,
  Separator,
  BottomDivider,
} from "./styles";

import storyInfo from "../../data/stories";

import Ionic from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AvatarUser from "../AvatarUser";

const ToolBar = () => {
  return (
    <>
      <Container>
        <Row>
          <AvatarUser source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1byto-9fpMErWuWhauZudamol6HA0aUnBA&usqp=CAU"} />
          <Input placeholder="O que você está pensando ?" />
        </Row>
        <Divider />
        <Row>
          <Menu>
            <Ionic name="ios-videocam" size={22} color="#f44337" />
            <MenuText>Ao Vivo</MenuText>
          </Menu>
          <Separator />
          <Menu>
            <MaterialIcons
              name="photo-size-select-actual"
              size={20}
              color="#4caf50"
            />
            <MenuText>Foto</MenuText>
          </Menu>
          <Separator />
          <Menu>
            <MaterialCommunityIcons
              name="video-plus"
              size={22}
              color="#e141fc"
            />
            <MenuText>Sala</MenuText>
          </Menu>
        </Row>
      </Container>
      <BottomDivider />
    </>
  );
};

export default ToolBar;
