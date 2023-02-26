import { IProviderInfo } from '../../helpers';

// @ts-ignore
const Web3DefaultLogo = 'assets/web3-modal-logos/web3-default.svg';
// @ts-ignore
const MetaMaskLogo = 'assets/web3-modal-logos/metamask.svg';
// @ts-ignore
const SafeLogo = 'assets/web3-modal-logos/safe.svg';
// @ts-ignore
const NiftyWalletLogo = 'assets/web3-modal-logos/niftyWallet.png';
// @ts-ignore
const TrustLogo = 'assets/web3-modal-logos/trust.svg';
// @ts-ignore
const DapperLogo = 'assets/web3-modal-logos/dapper.png';
// @ts-ignore
const CoinbaseLogo = 'assets/web3-modal-logos/coinbase.svg';
// @ts-ignore
const CipherLogo = 'assets/web3-modal-logos/cipher.svg';
// @ts-ignore
const imTokenLogo = 'assets/web3-modal-logos/imtoken.svg';
// @ts-ignore
const StatusLogo = 'assets/web3-modal-logos/status.svg';
// @ts-ignore
const TokenaryLogo = 'assets/web3-modal-logos/tokenary.png';
// @ts-ignore
const OperaLogo = 'assets/web3-modal-logos/opera.svg';

export const FALLBACK: IProviderInfo = {
  id: 'injected',
  name: 'Web3',
  logo: Web3DefaultLogo,
  type: 'injected',
  check: 'isWeb3',
};

export const METAMASK: IProviderInfo = {
  id: 'injected',
  name: 'MetaMask',
  logo: MetaMaskLogo,
  type: 'injected',
  check: 'isMetaMask',
};

export const SAFE: IProviderInfo = {
  id: 'injected',
  name: 'Safe',
  logo: SafeLogo,
  type: 'injected',
  check: 'isSafe',
};

export const NIFTY: IProviderInfo = {
  id: 'injected',
  name: 'Nifty',
  logo: NiftyWalletLogo,
  type: 'injected',
  check: 'isNiftyWallet',
};

export const DAPPER: IProviderInfo = {
  id: 'injected',
  name: 'Dapper',
  logo: DapperLogo,
  type: 'injected',
  check: 'isDapper',
};

export const OPERA: IProviderInfo = {
  id: 'injected',
  name: 'Opera',
  logo: OperaLogo,
  type: 'injected',
  check: 'isOpera',
};

export const TRUST: IProviderInfo = {
  id: 'injected',
  name: 'Trust',
  logo: TrustLogo,
  type: 'injected',
  check: 'isTrust',
};

export const COINBASE: IProviderInfo = {
  id: 'injected',
  name: 'Coinbase',
  logo: CoinbaseLogo,
  type: 'injected',
  check: 'isToshi',
};

export const CIPHER: IProviderInfo = {
  id: 'injected',
  name: 'Cipher',
  logo: CipherLogo,
  type: 'injected',
  check: 'isCipher',
};

export const IMTOKEN: IProviderInfo = {
  id: 'injected',
  name: 'imToken',
  logo: imTokenLogo,
  type: 'injected',
  check: 'isImToken',
};

export const STATUS: IProviderInfo = {
  id: 'injected',
  name: 'Status',
  logo: StatusLogo,
  type: 'injected',
  check: 'isStatus',
};

export const TOKENARY: IProviderInfo = {
  id: 'injected',
  name: 'Tokenary',
  logo: TokenaryLogo,
  type: 'injected',
  check: 'isTokenary',
};
