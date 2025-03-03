import React from "react";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Artist = () => {
  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, var(--_shade), var(--_shade)),url(https://www.hashtagtreinamentos.com/wp-content/uploads/2025/02/mc-tuto.png)",
        }}
      >
        <h2 className="artist__title">Mc Tuto</h2>
      </div>

      <div className="artist__body">
        <Link to="/song/1">
          <FontAwesomeIcon
            className="single-item__icon single-item__icon--artist"
            icon={faCirclePlay}
          />
        </Link>
      </div>
    </div>
  );
};

export default Artist;
