import React from "react";

import { View } from "react-native";

import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import AvatarUser from "../AvatarUser";

import postInfo from "../../data/post";

import {
  Container,
  Header,
  Row,
  User,
  Time,
  Post,
  Photo,
  Footer,
  FooterCount,
  IconCount,
  TextCount,
  Separator,
  FooterMenu,
  Button,
  Icon,
  Text,
  BottomDivider,
} from "./styles";

const Feed = () => {
  return (
    <>
      {postInfo.map((item) => (
        <Container key={item.id}>
          <Header>
            <Row>
              <AvatarUser source={item.postPersonImage} />
              <View style={{ paddingLeft: 10 }}>
                <User>{item.postTitle}</User>
                <Row>
                  <Time>{item.time_post}</Time>
                  <Entypo name="dot-single" size={12} color="#747476" />
                  <Entypo name="globe" size={10} color="#747476" />
                </Row>
              </View>
            </Row>

            <Entypo name="dots-three-horizontal" size={15} color="#222121" />
          </Header>

          <Post>{item.text}</Post>
          <Photo
            source={{
              uri: item.postImage,
            }}
          />

          <Footer>
            <FooterCount>
              <Row>
                <IconCount>
                  <AntDesign name="like1" size={12} color="#FFFFFF" />
                </IconCount>
                <TextCount>{item.likes} curtidas</TextCount>
              </Row>
              <TextCount>{item.comments} comentários</TextCount>
            </FooterCount>

            <Separator />

            <FooterMenu>
              <Button>
                <Icon>
                  <AntDesign name="like2" size={20} color="#424040" />
                </Icon>
                <Text>Curtir</Text>
              </Button>

              <Button>
                <Icon>
                  <MaterialCommunityIcons
                    name="comment-outline"
                    size={20}
                    color="#424040"
                  />
                </Icon>
                <Text>Comentário</Text>
              </Button>

              <Button>
                <Icon>
                  <MaterialCommunityIcons
                    name="share-outline"
                    size={20}
                    color="#424040"
                  />
                </Icon>
                <Text>Compartilhar</Text>
              </Button>
            </FooterMenu>
          </Footer>
          <BottomDivider />
        </Container>
      ))}
    </>
  );
};

export default Feed;
