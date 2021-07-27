import React from 'react';
import styles from "./header.module.less"

interface obj {
    backColor: string
}

const Headr = (props: obj) => {
    console.log(props)
    return (
        <div className={styles.header_content} style={{ background: props.backColor }}>
            <div>
                <div className={styles.name}>
                    <img src={require("../assets/images/logo.png").default} alt="" />
                    <span>Jgl</span>
                </div>
                <div className={styles.menu}>
                    <div>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-home"></use>
                        </svg>
                        <span>首页</span>
                    </div>
                    <div>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-tag"></use>
                        </svg>
                        <span>标签</span>
                    </div>
                    <div>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-comment"></use>
                        </svg>
                        <span>留言</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Headr;