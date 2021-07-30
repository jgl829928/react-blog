import { useState, useEffect } from 'react';
import styles from "./index.module.less"
import SvgIcon from "../../components/iconSvg";
import { getBlogs } from "../../axios/blog"
import { Row, Col } from 'antd';

interface blogItem {
    _id: string,
    tags: string[],
    comments: string[],
    creatTime: string,
    textCount: number,
    readDuration: number,
    readTimes: number,
    title: string,
    subtitle: string,
    description: string,
    content: string,
    createtime: string,
    updattime: string,
}

const Blog = () => {
    const [width] = useState<number>(30)
    const [height] = useState<number>(40)
    const [blogList, setBlogList] = useState<blogItem[]>([])
    const getBlogList = async () => {
        let res = await getBlogs()
        setBlogList(() => res.response)
    }
    useEffect(() => {
        getBlogList()
    }, [])

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
                    {blogList.map((item) => {
                        return (
                            <div className={styles.blogList_item} >
                                <div className={styles.blog_title}>
                                    <img src={require("../../assets/images/huisu.jpg").default} alt="" />
                                    <p>{item.title}</p>
                                </div>
                                <div className={styles.blog_detail}>
                                    <p>{item.subtitle}</p>
                                    <div>
                                        <p><SvgIcon iconname="time" fill="#34495e" width={15} height={15}></SvgIcon><span>{item.creatTime}</span></p>
                                        <p><SvgIcon iconname="book-mark" fill="#34495e" width={20} height={25}></SvgIcon><span>学习</span></p>
                                    </div>

                                </div>
                                <div className={styles.blog_tags}>
                                    {
                                        item.tags.map(tagItem => {
                                            return (
                                                <span>{tagItem}</span>
                                            )
                                        })
                                    }
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