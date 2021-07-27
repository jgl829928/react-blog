import { useState, useEffect } from 'react';
import styles from "./index.module.less"
import SvgIcon from "../../components/iconSvg";

const Blog = () => {
    const [width] = useState<number>(30)
    const [height] = useState<number>(40)
    return (
        <div className={styles.blogList_content}>
            <div>
                <div className={styles.blogList_banner}>
                    <div className={styles.title}>
                        <SvgIcon iconname="lightbulb" fill="#34495e" width={width} height={height}></SvgIcon>
                        <span>Epiphany</span>
                    </div>
                    <div className={styles.subtitle}>
                        ———我想让事情是它本来该有的那个样子———
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;