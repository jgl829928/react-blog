export interface IFMenuBase {
    key: string;
    title: string;
    icon?: string;
    component?: string;
    query?: string;
    requireAuth?: string;
    route?: string;
    /** 是否登录校验，true不进行校验（访客） **/
    login?: boolean;
}

export interface IFMenu extends IFMenuBase {
    subs?: IFMenu[];
}


const menus: {
    menus: IFMenu[];
    others: IFMenu[] | [];
    [index: string]: any;
} = {
    menus: [
        // 菜单相关路由
        { key: '/app/index', title: '首页', icon: 'SmileOutlined', component: 'Home' },
        { key: '/app/tags', title: '标签', icon: 'SmileOutlined', component: 'Tags' },
        { key: '/app/comments', title: '评论', icon: 'SmileOutlined', component: 'Comments' }
    ],
    others: [], // 非菜单相关路由
};

export default menus;

