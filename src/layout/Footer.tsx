
import styles from "./footer.module.less"
import { Row, Col } from 'antd';
import SvgIcon from "../components/iconSvg";

const Headr = () => {
    return (
        <div className={styles.footer}>
            <div>
                <Row>
                    <Col span={16}>
                        <p>Copyright ©<span>2019</span> <a href=""> 吴明</a> | Powered by <a href=""> Hexo</a></p>
                        <p>站点总字数: <span>22.4k</span> |  总访问量: <span>21184</span>次</p>
                    </Col>
                    <Col span={8} className={styles.qq_icon}>
                        <SvgIcon iconname="qq" fill="#fff" width={15} height={15}></SvgIcon>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Headr;