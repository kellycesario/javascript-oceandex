import Arrow from "@atoms/ArrowLeft";
import Background from "@atoms/Background";
import Button from "@atoms/Button";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import React from "react";
import styles from "./styles.module.scss";

export default function OceanWorldwide() {
  const oceans = [
    {
      title: "Pacific Ocean",
      img: "/assets/images/icons/pacific.svg",
      description: "The biggest ocean",
    },
    {
      title: "Atlantic Ocean",
      img: "/assets/images/icons/atlantic.svg",
      description: "Sea of the atlas",
    },
    {
      title: "Indian Ocean",
      img: "/assets/images/icons/indian.svg",
      description: "Third-largest ocean",
    },
    {
      title: "Southern Ocean",
      img: "/assets/images/icons/southern.svg",
      description: "Portions of oceans",
    },
    {
      title: "Arctic Ocean",
      img: "/assets/images/icons/artic.svg",
      description: "The smallest ocean",
    },

    // "Pacific Ocean",
    // "Indian Ocean",
    // "Southern Ocean",
    // "Arctic Ocean",
  ];
  return (
    <div className={styles[`OceanWorldwide`]}>
      <div className={styles[`OceanWorldwide__container`]}>
        <img
          className={styles[`OceanWorldwide__header--rectangle`]}
          alt=""
          src="assets/images/extras/Rectangle.png"
        />
        <span className={styles[`OceanWorldwide__Arrow`]}>
          <Arrow href="/home" white={true}></Arrow>
        </span>
        <section className={styles[`OceanWorldwide__header`]}>
          <Heading
            level="1"
            className={styles[`OceanWorldwide__container--text`]}
            size="Xlarge"
            color="white"
            style="italic"
          >
            {" "}
            Ocean WorldWide
          </Heading>
        </section>
        <div className={styles[`OceanWorldwide__content`]}>
          <section className={styles[`OceanWorldwide__content--buttons`]}>
            {oceans.map((ocean) => (
              <Button
                href="/OceanCuriosities"
                size="large"
                color="purple"
                title={ocean.title}
                description={ocean.description}
                img={ocean.img}
                className={styles[`OceanWorldwide__buttonUnit`]}
              >
                {/*   <Text color="white" size="large">
                  {ocean}
                </Text> */}
              </Button>
            ))}
          </section>
        </div>
      </div>
      <section className={styles[`OceanWorldwide__background`]}>
        <Background />
      </section>
    </div>
  );
}
