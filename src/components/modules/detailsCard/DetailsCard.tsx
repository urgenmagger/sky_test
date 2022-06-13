import React, { FC, useId } from "react";
import { DetailsCardProps } from "./types";

const DetailsCard: FC<DetailsCardProps> = ({ items }): JSX.Element => {
  const id = useId();
  return (
    <>
      {items?.map((item, i) => (
        <div key={id + i}>
          <div className="text-xs text-red-400 flex justify-between items-center">
            Gender: {item.gender}
          </div>
          <div className="text-xs text-red-400 flex justify-between items-center">
            Dob: {item.birth_year}
          </div>
          <div className="text-xs text-black-400 flex justify-between items-center">
            Films:
          </div>
          {item.films.map((film: string) => (
            <div
              key={id + film}
              className="text-xs text-black-400 flex justify-between items-center pl-10 "
            >
              {film}
            </div>
          ))}
          <div className="text-xs text-red-400 flex justify-between items-center">
            Skin: {item.skin_color}
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailsCard;
