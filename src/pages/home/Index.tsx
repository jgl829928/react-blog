
import React, { useState, useEffect } from 'react';
import styles from "./index.module.less"

const Home = () => {
    const [buttonText] = useState<string>("开始阅读");
    const [subtitle, setSubtitle] = useState<string>("");
    useEffect(() => changeSubtitle(), []);
    const changeSubtitle = () => {
        addTitle()
    }
    const addTitle = () => {
        let title = "大胆挑战，世界总会进步"
        let count = 0
        let addinterval = setInterval(() => {
            setSubtitle(() => {
                let subtitleVal = title.substr(0, count)
                return subtitleVal
            })
            count++;
            if (count > title.length) {
                clearInterval(addinterval)
                removeTitle()
            }
        }, 200)
    }
    const removeTitle = () => {
        let title = "大胆挑战，世界总会进步"
        let count = title.length - 1;
        let removeinterval = setInterval(() => {
            setSubtitle(() => {
                let subtitleVal = title.substr(0, count)
                return subtitleVal
            })
            count--;
            if (count < 0) {
                clearInterval(removeinterval);
                addTitle()
            }
        }, 200)
    }
    return (
        <div className={styles.home_content}>
            <div className={styles.banner}>
                <div className={styles.title}>
                    XX's BLOG
                </div>
                <div className={styles.subtitle}>
                    {subtitle}
                </div>
                <div className={styles.read_btn}>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-doubledown"></use>
                    </svg>
                    <span>{buttonText}</span>
                </div>
            </div>
        </div>
    );
}

export default Home;