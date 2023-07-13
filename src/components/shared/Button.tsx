import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';

type ButtonProps = {
  iconName: string;
  children?: ReactNode;
};

const Button = ({ iconName, children }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'p-1 relative hover:bg-basic-800/50 transition-colors',
        'rounded-md',
      )}
    >
      <Image alt="" src={`/icons/${iconName}.svg`} height={24} width={24} />
      {children}
    </button>
  );
};

export default Button;
