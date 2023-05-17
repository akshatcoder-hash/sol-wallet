import BoxComponent from './BoxComponent';
import FlexComponent from './FlexComponent';
import VStackComponent from './VStackComponent';
import TextComponent from './TextComponent';
// Import other components

const Home: NextPage = () => {
  // ...

  return (
    <div>
      <Head>
        {/* Head content */}
      </Head>

      <FlexComponent flexDir={'column'} paddingX="24px" my={4}>
        <FlexComponent flexDir={'row'} justifyContent={'space-between'} alignItems="center">
          <FlexComponent defaultValue={'mainnet-beta'} width="160px" height="42px" textAlign={'center'} onChange={changeNetwork}>
            <option value="mainnet-beta">mainnet-beta</option>
            <option value="devnet">devnet</option>
          </FlexComponent>
          <IconButtonComponent onClick={open} aria-label="Wallet Settings" icon={<SettingsIcon fontSize="28px" />} variant="ghost" size="2xl" />
        </FlexComponent>
        <VStackComponent alignContent={'center'} justifyContent="center">
          <TextComponent fontSize={'5xl'} fontWeight={'600'} mt={0}>
            ${(solPrice * solBalance + usdcBalance).toFixed(2)}{' '}
            {network === 'devnet' && solBalance === 0 && (
              <ButtonComponent size="xs" onClick={devnetAirdrop}>
                Dev...
              </ButtonComponent>
            )}
          </TextComponent>
          {/* Other components */}
        </VStackComponent>
      </FlexComponent>
    </div>
  );
};

export default Home;
