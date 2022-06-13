import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import DetailsCard from "../components/modules/detailsCard/DetailsCard";
import { useAppContext } from "../context/AppContext";

const Details: FC = (): JSX.Element => {
  const { name } = useParams();

  sessionStorage.setItem(name, name);

  const { persons } = useAppContext();
  const getDetails = persons.filter((item: string) => item.name === name);

  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <div className="px-6 py-3 rounded border w-64">
        <div className="flex flex-col items-center justify-center mb-4">
          <h2 className="text-2xl font-bold">Details</h2>
        </div>
        <div className="flex flex-col my-2">
          <label className="text-xs text-gray-400">{name}</label>
        </div>
        <DetailsCard items={getDetails} />
        <div className="text-center">
          <Link to={"/"}>Main</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
