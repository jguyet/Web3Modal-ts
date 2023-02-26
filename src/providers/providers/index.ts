// @ts-ignore
const WalletConnectLogo = 'assets/web3-modal-logos/walletconnect-circle.svg';
// @ts-ignore
const PortisLogo = 'assets/web3-modal-logos/portis.svg';
// @ts-ignore
const SquarelinkLogo = 'assets/web3-modal-logos/squarelink.svg';
// @ts-ignore
const FortmaticLogo = 'assets/web3-modal-logos/fortmatic.svg';
// @ts-ignore
const ArkaneLogo = 'assets/web3-modal-logos/arkane.svg';
// @ts-ignore
const TorusLogo = 'assets/web3-modal-logos/torus.svg';
// @ts-ignore
const AuthereumLogo = 'assets/web3-modal-logos/authereum.svg';
// @ts-ignore
const BurnerWalletLogo = 'assets/web3-modal-logos/burnerwallet.png';
// @ts-ignore
const UniLoginLogo = 'assets/web3-modal-logos/unilogin.svg';
// @ts-ignore
const MEWwallet = 'assets/web3-modal-logos/mewwallet.png';
// @ts-ignore
const DcentWalletLogo = 'assets/web3-modal-logos/dcentwallet.png';
// @ts-ignore
const BitskiLogo = 'assets/web3-modal-logos/bitski.svg';

import { IProviderInfo } from '../../helpers';

export * from '../injected';

export const WALLETCONNECT: IProviderInfo = {
  id: 'walletconnect',
  name: 'WalletConnect',
  logo: WalletConnectLogo,
  type: 'qrcode',
  check: 'isWalletConnect',
  package: {
    required: [['infuraId', 'rpc']],
  },
};

export const PORTIS: IProviderInfo = {
  id: 'portis',
  name: 'Portis',
  logo: PortisLogo,
  type: 'web',
  check: 'isPortis',
  package: {
    required: ['id'],
  },
};

export const FORTMATIC: IProviderInfo = {
  id: 'fortmatic',
  name: 'Fortmatic',
  logo: FortmaticLogo,
  type: 'web',
  check: 'isFortmatic',
  package: {
    required: ['key'],
  },
};

export const SQUARELINK: IProviderInfo = {
  id: 'squarelink',
  name: 'Squarelink',
  logo: SquarelinkLogo,
  type: 'web',
  check: 'isSquarelink',
  package: {
    required: ['id'],
  },
};

export const TORUS: IProviderInfo = {
  id: 'torus',
  name: 'Torus',
  logo: TorusLogo,
  type: 'web',
  check: 'isTorus',
};

export const ARKANE: IProviderInfo = {
  id: 'arkane',
  name: 'Arkane',
  logo: ArkaneLogo,
  type: 'web',
  check: 'isArkane',
  package: {
    required: ['clientId'],
  },
};

export const AUTHEREUM: IProviderInfo = {
  id: 'authereum',
  name: 'Authereum',
  logo: AuthereumLogo,
  type: 'web',
  check: 'isAuthereum',
};

export const BURNERCONNECT: IProviderInfo = {
  id: 'burnerconnect',
  name: 'Burner Connect',
  logo: BurnerWalletLogo,
  type: 'web',
  check: 'isBurnerProvider',
};

export const UNILOGIN: IProviderInfo = {
  id: 'unilogin',
  name: 'UniLogin',
  logo: UniLoginLogo,
  check: 'isUniLogin',
  type: 'web',
};

export const MEWCONNECT: IProviderInfo = {
  id: 'mewconnect',
  name: 'MEW wallet',
  logo: MEWwallet,
  type: 'qrcode',
  check: 'isMEWconnect',
  package: {
    required: [['infuraId', 'rpc']],
  },
};

export const DCENT: IProviderInfo = {
  id: 'dcentwallet',
  name: "D'CENT",
  logo: DcentWalletLogo,
  type: 'hardware',
  check: 'isDcentWallet',
  package: {
    required: ['rpcUrl'],
  },
};

export const BITSKI: IProviderInfo = {
  id: 'bitski',
  name: 'Bitski',
  logo: BitskiLogo,
  type: 'web',
  check: 'isBitski',
  package: {
    required: ['clientId', 'callbackUrl'],
  },
};
