import { useEffect, useState } from "react";
import s from "./style.module.css";
import { TVShowAPI } from "./tv-show";
import { BACKDROP_PATH } from "./API/config";
import TVShowDetail from "./API/TVShowDetail/TVShowDetail";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log(currentTVShow);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)) ,url("${BACKDROP_PATH}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input type="text" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>Recommendations</div>
    </div>
  );
}
