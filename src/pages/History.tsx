import React, { FC } from "react";
import { Link } from "react-router-dom";

const History: FC = (): JSX.Element => {
  const storage = Object.keys(sessionStorage);
  const filterName = storage.filter((i) => i !== "savefrom-helper-extension");

  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <div className="px-6 py-3 rounded border w-64">
        <div className="flex flex-col items-center justify-center mb-4">
          <h2 className="text-2xl font-bold">History</h2>
        </div>
        <div className="flex flex-col my-2">
          {filterName.map((i) => (
            <div
              key={i}
              className="my-1 py-1 text-center w-full rounded bg-blue-600 text-blue-200"
            >
              {i}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to={"/"}>Main</Link>
        </div>
      </div>
    </div>
  );
};

export default History;
