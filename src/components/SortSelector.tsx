import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {}

function SortSelector({}: Props) {
  const sortOptions = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>

      <MenuList>
        <MenuItem onClick={() => {}}>Relevance</MenuItem>
        <MenuItem onClick={() => {}}>Date added</MenuItem>
        <MenuItem onClick={() => {}}>Name</MenuItem>
        <MenuItem onClick={() => {}}>Release date</MenuItem>
        <MenuItem onClick={() => {}}>Popularity</MenuItem>
        <MenuItem onClick={() => {}}>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
