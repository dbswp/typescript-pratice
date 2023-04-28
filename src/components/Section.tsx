import React from "react";
import styles from "../styles/section.module.scss";

export default function Section({ color }: { color: string }) {
  return (
    <div className={styles.box}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus hic
        eos distinctio animi sint saepe, pariatur rerum voluptate ipsa, quod
        dicta maiores corrupti. Praesentium accusantium nostrum eos ullam et.
        Explicabo.
      </p>
      <button className={styles[color]}>버튼</button>
    </div>
  );
}
