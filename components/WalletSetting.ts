import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Flex,
  Text,
  Button,
  Code,
  Input,
  Divider,
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { Keypair, PublicKey } from '@solana/web3.js';

interface WalletSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  solPrice: number;
  solBalance: number;
  usdcBalance: number;
  accountMnemonic: string;
  onCopySeedLink: () => void;
}

const WalletSettings: React.FC<WalletSettingsProps> = ({
  isOpen,
  onClose,
  solPrice,
  solBalance,
  usdcBalance,
  accountMnemonic,
  onCopySeedLink,
}) => {
  const [showSeed, setShowSeed] = useState(false);
  const [mnemonicToImport, setMnemonicToImport] = useState('');

  const importAccountFromMnemonic = (mnemonic: string) => {
    try {
      const importedAccount = Keypair.fromMnemonic(mnemonic);
      const publicKey = importedAccount.publicKey.toBase58();

    } catch (error) {
      console.error('Error importing account:', error);

    }
  };

  const onCfmOpen = () => {
    try {
      const newAccount = Keypair.generate();
      const publicKey = newAccount.publicKey.toBase58();

      console.log('New account generated:', publicKey);
  
      onClose();
    } catch (error) {
      console.error('Error generating new account:', error);

    }
  };
  

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Wallet Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack mb="24px" spacing={4}>
            <Flex width="100%" justifyContent="space-between" alignItems="center">
              <Text fontSize={'xl'}>Current Wallet</Text>
              <Text fontSize={'xl'} fontWeight={'600'}>
                ${(solPrice * solBalance + usdcBalance).toFixed(2)}
              </Text>
            </Flex>
            <Flex width="100%" justifyContent="center" alignItems="center">
              {showSeed ? (
                <Flex flexDirection={'column'} alignItems="center">
                  <Button
                    colorScheme="yellow"
                    variant="solid"
                    width={'150px'}
                    leftIcon={<WarningTwoIcon />}
                    onClick={() => setShowSeed(false)}
                  >
                    Hide Seed
                  </Button>
                  <Code my={4} padding={'20px'} fontSize="md" borderRadius={'2xl'}>
                    {accountMnemonic}
                  </Code>
                  <Button colorScheme="blue" variant="outline" onClick={onCopySeedLink}>
                    {hasCopiedSeedLink ? 'Copied' : 'Copy Link with Seed'}
                  </Button>
                </Flex>
              ) : (
                <Button
                  colorScheme="yellow"
                  variant="solid"
                  leftIcon={<WarningTwoIcon />}
                  onClick={() => setShowSeed(true)}
                >
                  Reveal Seed
                </Button>
              )}
            </Flex>
            <Divider />
            <Text fontSize={'xl'}>Import / Generate Account</Text>
            <Input
              mt={2}
              placeholder="Seed Phrase"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setMnemonicToImport(event.target.value)
              }
            />
            <Button colorScheme="blue" variant="outline" onClick={() => importAccountFromMnemonic(mnemonicToImport)}>
              Import
            </Button>
            <Divider />
            <Button colorScheme="red" variant="solid" onClick={onCfmOpen}>
              Generate new account
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WalletSettings;
