import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Details: FC = (): JSX.Element => {
  const { name } = useParams();

  sessionStorage.setItem(name, name);

  const { persons } = useAppContext();
  const getDetails = persons.filter((item) => item.name === name);

  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <div className="px-6 py-3 rounded border w-64">
        <div className="flex flex-col items-center justify-center mb-4">
          <h2 className="text-2xl font-bold">Details</h2>
        </div>
        <div className="flex flex-col my-2">
          <label className="text-xs text-gray-400">{name}</label>
          {getDetails.map((item) => (
            <>
              <div
                key={item.url}
                className="text-xs text-red-400 flex justify-between items-center"
              >
                Gender: {item.gender}
              </div>
              <div className="text-xs text-red-400 flex justify-between items-center">
                Dob: {item.birth_year}
              </div>
              <div className="text-xs text-black-400 flex justify-between items-center">
                Films:
              </div>
              {item.films.map((film) => (
                <div className="text-xs text-black-400 flex justify-between items-center pl-10 ">
                  {film}
                </div>
              ))}
              <div className="text-xs text-red-400 flex justify-between items-center">
                Scin: {item.skin_color}
              </div>
            </>
          ))}
        </div>
        <div>
          <Link to={"/"}>Main</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
