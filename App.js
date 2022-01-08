import { StatusBar, ScrollView } from "react-native";
import styled from "styled-components/native";

import AppBar from "./src/components/AppBar";
import ToolBar from "./src/components/ToolBar";
import User from "./src/components/User";
import Story from "./src/components/Story";
import Feed from "./src/components/Feed";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar />
          <User />
          <Story />
          <Feed />
        </ScrollView>
      </Container>
    </>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
`;
