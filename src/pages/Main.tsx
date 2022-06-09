import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PersonsItem from "../components/modules/personsItem/PersonsItem";
import { useAppContext } from "../context/AppContext";

const Main: FC = (): JSX.Element => {
  const { persons: getItemsName } = useAppContext();
  const [personName, setPersonName] = useState();
  const [names, setNames] = useState("");

  const handleSearch = (el: string) => {
    const searchName = el.target.value.toLowerCase();
    if (searchName !== "") {
      const displayName = getItemsName.filter(
        (item) => item.name.toLowerCase().indexOf(searchName) !== -1
      );
      setPersonName(displayName);
    } else {
      setPersonName(getItemsName);
    }
    setNames(searchName);
  };

  useEffect(() => {
    if (getItemsName) {
      setPersonName(getItemsName);
    }
  }, [getItemsName]);

  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <div className="px-6 py-3 rounded border w-64">
        <div className="flex flex-col items-center justify-center mb-4">
          <h2 className="text-2xl font-bold">Main</h2>
        </div>
        <div className="flex flex-col my-2">
          <label className="text-xs text-gray-400">Search</label>
          <div className="text-xs text-red-400 flex justify-between items-center"></div>
        </div>
        <input
          className="border rounded px-3 py-1 mt-2"
          type="search"
          value={names}
          onChange={handleSearch}
        />
        {personName && personName?.length > 0 && (
          <PersonsItem items={personName} />
        )}
        <div>
          <Link to={"history"}>History</Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
