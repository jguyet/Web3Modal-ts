const ConnectToInjected = async () => {
  let provider = null;
  if ((window as any).ethereum) {
    provider = (window as any).ethereum;
    try {
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      throw new Error('User Rejected');
    }
  } else {
    throw new Error('No Web3 Provider found');
  }
  return provider;
};

export default ConnectToInjected;
