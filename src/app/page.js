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
      <div style={styling} className={styles.result}>
        <div>TL</div>
        <div>TR</div>
        <div>BL</div>
        <div>BR</div>
      </div>
      <div style={{ color: "white", fontWeight: "bold" }}>
        CSS: border-radius: {oneValue}px {twoValue}px {theeValue}px {fourValue}
        px
      </div>
      <div style={{ color: "white", fontWeight: "bold" }}>
        JSX: borderRadius: &ldquo;{oneValue}px {twoValue}px {theeValue}px{" "}
        {fourValue}
        px&ldquo;
      </div>
      <div className={styles.inputs}>
        <input
          style={{ border: "2px solid red" }}
          onChange={handleValue}
          type="number"
          placeholder="TL"
        />
        <input
          style={{ border: "2px solid blue" }}
          onChange={handleSecoundValue}
          type="number"
          placeholder="TR"
        />
        <input
          style={{ border: "2px solid green" }}
          onChange={handleThreeValue}
          type="number"
          placeholder="BL"
        />
        <input
          style={{ border: "2px solid yellow" }}
          onChange={handleFourValue}
          type="number"
          placeholder="BR"
        />
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
