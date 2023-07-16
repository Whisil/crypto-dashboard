import clsx from 'clsx';
import { CollapseIcon, Logo, NFTs, Summary, Wallet } from '../assets/Icons';
import Button from '../Button';
import MenuItem from './MenuItem';

type SidebarProps = {
  toggleOpen: () => void;
  isOpen: boolean;
};

const Sidebar = ({ toggleOpen, isOpen }: SidebarProps) => {
  return (
    <div
      className={clsx(
        'block md:py-4 border-r border-basic-850',
        'flex flex-col items-center fixed md:relative',
        'min-h-screen inset-0 max-w-screen py-20 md:max-w-auto',
        isOpen && 'md:w-56 w-full',
      )}
    >
      <div
        className={clsx(
          'items-center justify-center mb-6 h-11 hidden md:flex w-full',
          isOpen && 'px-4 justify-between',
        )}
      >
        {isOpen && (
          <div className="flex items-center">
            <Logo size={32} className="inline-block mr-2.5" />
            <div>
              <span className="font-semibold inline-block text-base">Dash</span>
              <br />
              <span className="text-basic-600 leading-snug text-[10px]">
                One stop crypto hub
              </span>
            </div>
          </div>
        )}
        <Button
          icon={
            <CollapseIcon
              className={clsx('transition-transform', !isOpen && 'rotate-180')}
            />
          }
          className="text-basic-600"
          onClick={toggleOpen}
        />
      </div>
      <ul className="flex flex-col px-2 w-full">
        <MenuItem
          icon={<Wallet className="text-basic-700" />}
          text="Wallet"
          isOpen={isOpen}
        />
        <MenuItem
          icon={<NFTs className="text-basic-700" />}
          text="NFTs"
          isOpen={isOpen}
        />
        <MenuItem
          icon={<Summary className="text-basic-700" />}
          text="Summary"
          isOpen={isOpen}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
