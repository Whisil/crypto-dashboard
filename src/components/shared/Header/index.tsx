import clsx from 'clsx';
import Button from '../Button';
import { Logo, Menu, X } from '../assets/Icons';
import WalletBox from './WalletBox';
import Sidebar from '../Sidebar';

type HeaderProps = {
  heading: string;
  toggleOpenSidebar: () => void;
  isSidebarOpen: boolean;
};

const Header = ({ heading, toggleOpenSidebar, isSidebarOpen }: HeaderProps) => {
  return (
    <div
      className={clsx(
        'p-4 flex items-center justify-between border-b border-basic-850',
        'md:py-4 md:px-6',
      )}
    >
      <div className="flex-shrink w-1/2 md:hidden">
        <Button
          icon={isSidebarOpen ? <X /> : <Menu />}
          onClick={toggleOpenSidebar}
          className="relative z-30 text-basic-600"
        />
      </div>
      <div className="hidden md:block">
        <h1 className="font-extrabold text-base text-basic-100">{heading}</h1>
      </div>
      <div className="flex-shrink-0 grow md:hidden">
        <Logo />
      </div>
      <div className="flex flex-shrink w-1/2 justify-end md:w-auto md:block">
        <WalletBox />
      </div>
      <div className="block md:hidden">
        {isSidebarOpen && (
          <Sidebar toggleOpen={toggleOpenSidebar} isOpen={isSidebarOpen} />
        )}
      </div>
    </div>
  );
};

export default Header;
