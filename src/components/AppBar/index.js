import { Contaienr, Text, Row, Button } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const AppBar = () => {
  return (
    <Contaienr>
      <Text>Facebook</Text>
      <Row>
        <Button>
          <Feather name="search" size={29} />
        </Button>
        <Button>
          <MaterialCommunityIcons name="facebook-messenger" size={29} />
        </Button>
      </Row>
    </Contaienr>
  );
};

export default AppBar;
