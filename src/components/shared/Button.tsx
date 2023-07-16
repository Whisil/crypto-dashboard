import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonProps = {
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};

const Button = ({ icon, className, onClick, children }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'p-1 relative hover:bg-basic-800/50 transition-colors',
        'rounded-md w-fit h-fit flex items-center',
        icon && 'gap-2',
        className,
      )}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
