import GeneralCuriosities from "@molecules/GeneralCuriosities";
import styles from "./styles.module.scss";
import React from "react";
import Background from "@atoms/Background";
import Heading from "@atoms/Heading";
import Arrow from "@atoms/ArrowLeft";

export default function GeneralCuriositiesPage() {
  return (
    <div className={styles[`GeneralCuriositiesPage__Content`]}>
      <img
        className={styles[`GeneralCuriositiesPage__Header--rectangle`]}
        src="assets/images/extras/Rectangle.png"
        alt=""
      />
      <span className={styles[`GeneralCuriositiesPage__Arrow`]}>
        <Arrow href="/home" white={true}></Arrow>
      </span>
      <header className={styles[`GeneralCuriositiesPage__Header`]}>
        <Heading
          level="1"
          className={styles[`GeneralCuriositiesPage__Content--text`]}
          size="Xlarge"
          color="white"
          style="italic"
        >
          {" "}
          General Curiosities{" "}
        </Heading>
      </header>
      <div className={styles[`GeneralCuriositiesPage__Container`]}>
        <GeneralCuriosities></GeneralCuriosities>
      </div>
      <span>
        <Background />
      </span>
    </div>
  );
}
