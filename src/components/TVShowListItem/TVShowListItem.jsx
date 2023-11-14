import React from "react";
import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../API/config";

const TVShowListItem = ({ tvShow, onClick }) => {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    <div className={s.container} onClick={onClick_}>
      <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length < 20
          ? tvShow.name
          : tvShow.name.slice(0, 20) + "..."}
      </div>
    </div>
  );
};

export default TVShowListItem;
