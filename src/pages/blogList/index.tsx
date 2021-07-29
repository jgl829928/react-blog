import { useState } from 'react';
import styles from "./index.module.less"
import SvgIcon from "../../components/iconSvg";
import { Row, Col } from 'antd';

const Blog = () => {
    const [width] = useState<number>(30)
    const [height] = useState<number>(40)
    const [blogList] = useState([{},{},{},{},{},{},{},{}])
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
                <div className={styles.blogList_info}>
                    {blogList.map(() => {
                        return (
                            <div className={styles.blogList_item} >
                                <div className={styles.blog_title}>
                                    <img src={require("../../assets/images/huisu.jpg").default} alt="" />
                                    <p>回溯（入门）</p>
                                </div>
                                <div className={styles.blog_detail}>
                                    <p>回溯问题的两个案例</p>
                                    <div>
                                        <p><SvgIcon iconname="time" fill="#34495e" width={15} height={15}></SvgIcon><span>2021-01-24</span></p>
                                        <p><SvgIcon iconname="book-mark" fill="#34495e" width={20} height={25}></SvgIcon><span>学习</span></p>
                                    </div>

                                </div>
                                <div className={styles.blog_tags}>
                                    <span>数据结构与算法</span>
                                    <span>web</span>
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className={styles.blogList_page}>
                    <Row>
                        <Col span={8} className={styles.left_icon}><a href="#app/index" className={styles.grayBack}><SvgIcon iconname="arrow-left" fill="#34495e" width={25} height={25}></SvgIcon></a></Col>
                        <Col span={8} className={styles.page_text}>1 / 2</Col>
                        <Col span={8} className={styles.right_icon}><a href="#app/index" className={styles.blackBack}><SvgIcon iconname="arrow" fill="#34495e" width={25} height={25}></SvgIcon></a></Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Blog;