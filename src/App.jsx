import { useEffect, useState } from "react";
import s from "./style.module.css";
import { TVShowAPI } from "./tv-show";
import { BACKDROP_PATH } from "./API/config";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
import LogoImg from "./assets/logo.jpg";
import { TVShowList } from "./components/TVShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationlist] = useState([]);

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendationListResp = await TVShowAPI.fetchRecommendations(
      tvShowId
    );
    if (recommendationListResp.length > 0) {
      setRecommendationlist(recommendationListResp.slice(0, 10));
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  function updateCurrentTvShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  async function fetchByTitle(title) {
    const searchResponse = await TVShowAPI.fetchByTitle(title);
    if (searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0]);
    }
  }

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
            <Logo img={LogoImg} title="The Watcher" subTitle="Find the Best" />
          </div>

          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>
        {currentTVShow && (
          <TVShowList
            onClickItem={updateCurrentTvShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}
