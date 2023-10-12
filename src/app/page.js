"use client";
import { useState } from "react";
import styles from "./page.module.css";
export default function Home() {
  let [oneValue, setOneValue] = useState(0);
  let [twoValue, setTwoValue] = useState(0);
  let [theeValue, setThreeValue] = useState(0);
  let [fourValue, setFourValue] = useState(0);

  let handleValue = (e) => {
    setOneValue(e.target.value);
  };
  let handleSecoundValue = (e) => {
    setTwoValue(e.target.value);
  };
  let handleThreeValue = (e) => {
    setThreeValue(e.target.value);
  };
  let handleFourValue = (e) => {
    setFourValue(e.target.value);
  };

  let styling = {
    borderRadius: `${oneValue}px ${twoValue}px ${theeValue}px ${fourValue}px`,
  };

  return (
    <section className={styles.homeSec}>
      <div style={styling} className={styles.result}></div>
      <div style={{ color: "white", fontWeight: "bold" }}>
        CSS: border-radius: {oneValue}px {twoValue}px {theeValue}px {fourValue}
        px
      </div>
      <div style={{ color: "white", fontWeight: "bold" }}>
        JSX: borderRadius: {oneValue}px {twoValue}px {theeValue}px {fourValue}
        px
      </div>
      <div className={styles.inputs}>
        <input onChange={handleValue} type="number" />
        <input onChange={handleSecoundValue} type="number" />
        <input onChange={handleThreeValue} type="number" />
        <input onChange={handleFourValue} type="number" />
      </div>
      <footer
        className={styles.footer}
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <a style={{}} href="https://github.com/hamdymohamedak/" target="_blank">
          github
        </a>
        <a href="https://www.facebook.com/hamdy.elgokar.5" target="_blank">
          facebook
        </a>
        <a href="https://t.me/Askander19k" target="_blank">
          telegram
        </a>
        <a href="https://askander.vercel.app/" target="_blank">
          Portfolio
        </a>
      </footer>
    </section>
  );
}
