import { ScrollView } from "react-native";
import { Container, Room, Text, ContainerUser, BottomDivider } from "./styles";

import AvatarUser from "../AvatarUser";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import storyInfo from "../../data/stories";

const User = () => {
  return (
    <>
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 11 }}
        >
          <Room>
            <MaterialCommunityIcons
              name="video-plus"
              size={26}
              color="#E141FC"
            />
            <Text>Criar Sala</Text>
          </Room>
          {storyInfo.map((item) => (
            <ContainerUser key={item.id}>
              <AvatarUser source={item.image} online={item.online} />
            </ContainerUser>
          ))}
        </ScrollView>
      </Container>
      <BottomDivider/>
    </>
  );
};

export default User;
