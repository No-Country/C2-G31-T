import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { persistor } from "../redux/store";
import { resetProduct } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  padding:5px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "10px", marginLeft: "9px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart?.quantity);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    persistor.purge();
    dispatch(logout());
    history.push("/");
    dispatch(resetProduct());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link style={{ textDecoration: "none" }} to="/">
            <Logo>LOGO</Logo>
          </Link>
        </Center>
        <Right>
          <Link style={{ textDecoration: "none" }} to="/register">
            <MenuItem>REGISTRARSE</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/login">
            <MenuItem> INICIAR SESIÓN</MenuItem>
          </Link>
          <MenuItem onClick={handleLogout}>CERRAR SESIÓN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
