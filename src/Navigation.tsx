import { WalletDisconnectButton } from './ui/WalletDisconnectButton';
import { WalletMultiButton } from './ui/WalletMultiButton';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';

const Navigation: FC = () => {
  const { wallet } = useWallet();

  return (
    <nav>
      <h1>Solana Starter App</h1>
      <div>
        <WalletMultiButton />
        {wallet && <WalletDisconnectButton />}
      </div>
    </nav>
  );
};

export default Navigation;
