import { Link } from "react-router-dom";
import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} alt="logo app" boxSize="60px" objectFit="cover" />
      </Link>

      <SearchInput />

      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
