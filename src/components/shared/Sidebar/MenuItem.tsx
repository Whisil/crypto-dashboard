import { ReactNode } from 'react';
import clsx from 'clsx';
import Button from '../Button';

type MenuItemProps = {
  text: string;
  icon: ReactNode;
  isOpen: boolean;
  children?: ReactNode;
};

const MenuItem = ({ text, icon, isOpen, children }: MenuItemProps) => {
  return (
    <div className="">
      <Button icon={icon} className={clsx('w-full p-2 rounded-xl gap-4')}>
        {isOpen && (
          <span className="text-xs font-semibold text-basic-300">{text}</span>
        )}
      </Button>
      {children}
    </div>
  );
};

export default MenuItem;
