import clsx from 'clsx';

const WalletBox = () => {
  return (
    <div
      className={clsx(
        'rounded-full flex gap-2 items-center py-1 pr-1 pl-2',
        'bg-basic-800 md:pl-3',
      )}
    >
      <span className="text-xs md:text-sm font-semibold">0xjAbb...0x90</span>
      <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-[#4584FF] to-[#DAFF45]" />
    </div>
  );
};

export default WalletBox;
