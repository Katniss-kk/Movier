import style from "./ProfileCard.module.css";

import profileImg from "../../../../public/profileImg.png";

export default function ProfileCardUI() {
  return (
    <div className={style.profileContainer}>
      <div className={style.textContainer}>
        <h1 className={`${style.text} ${style.title}`}>
          Hello
          <span className={`${style.text} ${style.titleName}`}> Name!</span>
        </h1>
        <h3 className={`${style.text} ${style.infoText}`}>
          What are we going to watch today?
        </h3>
      </div>
      <img src={profileImg} alt="" className={style.profileImg} />
    </div>
  );
}
