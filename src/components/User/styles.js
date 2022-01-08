import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 58px;
  flex-direction: row;
  align-items: center;
`;

const Room = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: #82b1ff;
  padding: 0 15px;
  margin-right: 12px;
`;

const Text = styled.Text`
  color: #1777f2;
  font-size: 12px;
  padding-left: 6px;
`;

const ContainerUser = styled.View`
  margin-right: 13px;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;

export { Container, Room, Text, ContainerUser, BottomDivider };
