import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(p => (
          <Pet
            key={p.id}
            animal={p.type}
            name={p.name}
            breed={p.breeds.primary}
            media={p.photos}
            location={`${p.contact.address.city}, ${p.contact.address.state}`}
            id={p.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
