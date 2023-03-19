import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";

import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} alt="logo app" boxSize="60px" />

      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
