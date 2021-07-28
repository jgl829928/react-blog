import React, { useState, useEffect, useRef } from 'react';
import styles from './App.module.less';
import Routes from './routes';
import Head from './layout/Head';
import Footer from './layout/Footer';

const App = () => {
  const bodyRef = useRef<HTMLDivElement>(null)
  const [background, setBackground] = useState<string>("");
  useEffect(() => {
    const scrollEle = document.body; // 获取滚动元素
    const handleScroll = (e: object) => {
      if (document.body.scrollTop === 0) {
        setBackground(() => "")
      } else {
        setBackground(() => "#000")
      }
    }
    scrollEle.addEventListener("scroll", handleScroll);
  }, [])
  return (
    <div className={styles.App} ref={bodyRef} >
      <Head backColor={background}></Head>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
