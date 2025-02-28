import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* Item List de Artistas */}
      <ItemList title="Artistas" />
      {/* Item List de Músicas */}
      <ItemList title="Músicas" />
    </div>
  );
};

export default Main;
