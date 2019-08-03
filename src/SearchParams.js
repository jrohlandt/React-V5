import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = function() {
  const [location, setLocation] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    if (animal.length === 0) return;

    pet.breeds(animal).then(res => {
      const breedNames = res.breeds.map(b => b.name);
      setBreeds(breedNames);
    }, console.error);
  }, [setBreeds, setBreed, animal]);

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="E.g. Seattle, WA"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
