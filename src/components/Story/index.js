import { ScrollView } from "react-native";
import {
  Container,
  Card,
  CardStory,
  CardUser,
  CardFooter,
  Text,
  BottomDivider,
} from "./styles";

import AntDesign from "@expo/vector-icons/AntDesign";

import AvatarUser from "../AvatarUser"

import storyInfo from "../../data/stories";

const Story = () => {
  return (
    <>
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 5 }}
        >
          <Card>
            <CardStory
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1byto-9fpMErWuWhauZudamol6HA0aUnBA&usqp=CAU",
              }}
            />
            <CardUser>
              <AntDesign name="plus" size={24} color="#1777f2" />
            </CardUser>
            <CardFooter>
              <Text>Criar Story</Text>
            </CardFooter>
          </Card>
          {storyInfo.map((item) => (
            <Card key={item.id}>
              <CardStory
                source={{
                  uri: item.stories,
                }}
              />
              <CardUser>
                  <AvatarUser source={item.image} story={true}/>
              </CardUser>
              <CardFooter>
                <Text>{item.name}</Text>
              </CardFooter>
            </Card>
          ))}
        </ScrollView>
      </Container>
      <BottomDivider />
    </>
  );
};

export default Story;
