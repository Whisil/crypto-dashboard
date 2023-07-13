import Button from '../Button';
import Logo from '../assets/Logo';
import WalletBox from './WalletBox';

const Header = () => {
  return (
    <div className="p-4 flex items-center justify-between border-b border-basic-850">
      <div className="flex-shrink w-1/2">
        <Button iconName="menu" />
      </div>
      <div className="flex-shrink-0 grow">
        <Logo />
      </div>
      <div className="flex flex-shrink w-1/2 justify-end">
        <WalletBox />
      </div>
    </div>
  );
};

export default Header;
