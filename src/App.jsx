import { useEffect } from "react";
import s from "./style.module.css";
import { TVShowAPI } from "./tv-show";

export function App() {
  useEffect(() => {
    TVShowAPI.fetchPopulars();
  }, []);

  return (
    <div className={s.main_container}>
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
      <div className={s.tv_show_detail}>TV show Details</div>
      <div className={s.recommendations}>Recommendations</div>
    </div>
  );
}
