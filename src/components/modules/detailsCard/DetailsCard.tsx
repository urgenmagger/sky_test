import React, { FC } from "react";
import { DetailsCardProps } from "./types";

const DetailsCard: FC<DetailsCardProps> = ({ items }): JSX.Element => {
  return (
    <>
      {items?.map((item) => (
        <div
          key={item?.url}
          className="flex flex-col items-center justify-center my-4 h-5"
        >
          <button className="my-5 py-1 w-full rounded bg-blue-600 text-blue-200">
            {item?.name}
          </button>
        </div>
      ))}
    </>
  );
};

export default DetailsCard;
