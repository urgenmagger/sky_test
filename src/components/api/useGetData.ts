import { useEffect, useState } from "react";

const useGetData = () => {
  const [persons, setPersons] = useState<[]>([]);

  const getPersonsData = async () => {
    const responseData = await fetch("https://swapi.dev/api/people");
    const jsonData = await responseData.json();
    if (jsonData.results) {
      setPersons(jsonData.results);
    }
  };

  useEffect(() => {
    // as variant
    // fetch("https://swapi.dev/api/people")
    //   .then((response) => response.json())
    //   .then((json) => setPersons(json));
    getPersonsData();
  }, []);

  return { persons };
};

export default useGetData;
