import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";


const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore(state => state.gameQuery.platformId);
  const setPlatformId = useGameQueryStore(state => state.setPlatformId);
  const platformName = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem onClick={() => setPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
