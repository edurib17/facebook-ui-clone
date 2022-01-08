import React from "react";
import { Container, User, UserActive } from "./styles";

const AvatarUser = ({ source, online, story }) => {
  return (
    <Container>
      <User source={{ uri: source }} story={story} />
      {online && <UserActive />}
    </Container>
  );
};

export default AvatarUser;
