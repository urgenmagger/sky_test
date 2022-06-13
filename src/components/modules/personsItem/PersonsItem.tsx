import React, { FC } from "react";
import { Link } from "react-router-dom";
import { PersonItemsProps } from "./types";

const PersonsItem: FC<PersonItemsProps> = ({ items }): JSX.Element => {
  return (
    <>
      {items?.map((item) => (
        <div
          key={item?.url}
          className="flex flex-col items-center justify-center my-4 h-5"
        >
          <Link
            className="my-5 py-1 w-full text-center  rounded bg-blue-600 text-blue-200"
            key={item?.url}
            to={`/Details/${item.name}`}
          >
            {item?.name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default PersonsItem;
