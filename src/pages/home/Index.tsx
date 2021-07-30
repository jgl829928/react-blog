
import { useState, useEffect } from 'react';
import BlogList from "../blogList"
import styles from "./index.module.less"
import SvgIcon from "../../components/iconSvg";

const Home = () => {
    const [buttonText] = useState<string>("开始阅读");
    const [height, setHieght] = useState<number>(1);
    const [width, setWidth] = useState<number>(1);
    const [subtitle, setSubtitle] = useState<string>("");
    const initpage = () => {
        setHieght(() => document.body.clientHeight)
        setWidth(() => document.body.clientWidth)
        addTitle()
    }
    useEffect(() => { initpage() }, []); // eslint-disable-line react-hooks/exhaustive-deps
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
        }, 150)
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
        }, 150)
    }
    const readBlogs = () => {
        document.body.scrollTop = document.body.clientHeight - 64;
    }
    return (
        <div className={styles.home_content}>
            <div className={styles.index_content} style={{ width: width, height: height }}>
                <div className={styles.banner}>
                    <div className={styles.title} >
                        XX's BLOG
                    </div>
                    <div className={styles.subtitle}>
                        <p>{subtitle}</p>
                    </div>
                    <div className={styles.read_btn}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-doubledown"></use>
                        </svg>
                        <span onClick={readBlogs}>{buttonText}</span>
                    </div>
                    <div className={styles.qq_icon}>
                        <SvgIcon iconname="qq" fill="#fff" width={20} height={20}></SvgIcon>
                    </div>
                </div>
            </div>
            <BlogList></BlogList>
        </div>
    );
}

export default Home;