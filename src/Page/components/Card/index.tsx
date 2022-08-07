import { FC } from "react";
import { formatValue } from "../../../infra/services/formatter";
import { Prop } from "./types";

export const Card: FC<Prop> = ({ title, balanceAvailable, title2, amount }) => {
  return (
    <div className="flex flex-col items-center md:pr-[4.875rem] md:items-end justify-center w-full md:w-fit md:h-[6.438rem] shadow-xl p-4 bg-grey-px-50 rounded-[0.625rem]">
      <div className="flex flex-col md:flex-row items-center gap-1">
        <h3 className="font-bold text-2xl text-grey-px-800">{title}:</h3>
        <p className="font-bold text-2xl text-green-px-500">
          {formatValue(balanceAvailable)}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-1">
        <h3 className="font-normal text-base text-grey-px-800">{title2}:</h3>
        <strong className="font-bold text-base text-grey-px-800">
          {formatValue(amount)}
        </strong>
      </div>
    </div>
  );
};
