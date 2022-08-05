type Props = {
  title: string;
  availableBalance: number;
  amount: number;
};

const Header = ({ title, availableBalance, amount }: Props) => {
  const formattedValue = (value: number) => {
    const number = parseFloat((value / 100).toFixed(2));
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  };

  return (
    <header className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center pr-20">
      <h1 className="font-bold text-4xl text-grey-px-800">{title}</h1>
      <div className="flex flex-col items-center md:pr-[4.875rem] md:items-end justify-center w-fit md:h-[6.438rem] shadow-xl p-4 bg-grey-px-50 rounded-[0.625rem]">
        <div className="flex flex-col md:flex-row items-center gap-1">
          <h3 className="font-bold text-2xl text-grey-px-800">
            Saldo disponível:
          </h3>
          <p className="font-bold text-2xl text-green-px-500">
            {formattedValue(availableBalance)}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-1">
          <h3 className="font-normal text-base text-grey-px-800">
            Saldo em viagens:
          </h3>
          <strong className="font-bold text-base text-grey-px-800">
            {formattedValue(amount)}
          </strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
