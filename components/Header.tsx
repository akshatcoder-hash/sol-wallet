import React from 'react';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

const Header = ({ network, changeNetwork }) => {
  return (
    <Flex flexDir="row" justifyContent="space-between" alignItems="center">
      <Select defaultValue={network} width="160px" height="42px" textAlign="center" onChange={changeNetwork}>
        <option value="mainnet-beta">mainnet-beta</option>
        <option value="devnet">devnet</option>
      </Select>
      <IconButton aria-label="Wallet Settings" icon={<SettingsIcon fontSize="28px" />} variant="ghost" size="2xl" />
    </Flex>
  );
};

export default Header;
