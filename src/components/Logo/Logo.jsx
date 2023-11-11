import s from "./style.module.css";

export default function Logo({ img, title, subTitle }) {
  return (
    <>
      <div className={s.container}>
        <img src={img} alt="logo" className={s.logo} />
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subTitle}</div>
    </>
  );
}
