import styles from "./styles.module.scss";
export default function Background() {
  return (
    <div className={styles[`Background__ContainerBackgroundImage`]}>
      <img
        className={
          styles[`Background__ContainerBackgroundImage__BackgroundImage`]
        }
        src="/assets/images/background/backgroundLarge2.png"
        alt=""
      />
      <img
        className={
          styles[`Background__ContainerBackgroundImage__BackgroundImageMobile`]
        }
        src="/assets/images/background/background.png"
        alt=""
      />
    </div>
  );
}