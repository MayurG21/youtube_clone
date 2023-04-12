import "./styles.css";
import styled from "styled-components";
import Menu from "./component/Menu";
import Navbar from "./component/Navbar";
//import CastIcon from "@mui/icons-material/Cast";
//import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
//import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  display: flex;
  gap: 10px;
  background-color: #202020;
  color: white;
`;

const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      {/* menu */}
      <Menu />

      {/* main */}
      <Main>
        <Navbar />
        <Wrapper>Video Cards</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
