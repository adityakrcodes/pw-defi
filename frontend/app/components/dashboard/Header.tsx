import { Menu, Bell, User } from "lucide-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
interface HeaderProps {
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-800 border-b border-neutral-700/30">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-xl font-semibold ml-12 lg:ml-0">{activePage}</h2>
        <div className="flex items-center space-x-4">
            <WalletMultiButton
                style={{
                    backgroundColor: "transparent",
                    color: "white",
                    borderRadius: "5px",
                }}
            />
        </div>
      </div>
    </header>
  );
};

export default Header;
