'use client';

import clsx from 'clsx';
import { useState } from 'react';
import Button from '../Button';
import { CollapseIcon, Logo, NFTs, Summary, Wallet } from '../assets/Icons';
import MenuItem from './MenuItem';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={clsx(
        'hidden md:block py-4 border-r border-basic-850',
        'flex flex-col items-center',
        isOpen && 'max-w-56 w-full',
      )}
    >
      <div
        className={clsx(
          'flex items-center justify-center mb-6 h-11',
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
          onClick={() => setIsOpen((prevState) => !prevState)}
        />
      </div>
      <ul className="flex flex-col px-2">
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
