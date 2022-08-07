import { Card } from "../card";
import { Props } from "./type";

import { i18n } from "./i18n";

import { useI18N } from "../../../hooks/i18n";

export const Header = ({ pageTitle, balanceAvailable, amount }: Props) => {
  const texts = useI18N(i18n);

  return (
    <header className="mt-14 mb-3 flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center md:pr-20">
      <h1 className="font-bold text-4xl text-grey-px-800">{pageTitle}</h1>
      <Card
        title={texts.availableBalance}
        balanceAvailable={balanceAvailable}
        title2={texts.balanceOnTravel}
        amount={amount}
      />
    </header>
  );
};
