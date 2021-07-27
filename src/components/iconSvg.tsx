interface props {
    iconname: string,
    fill?: string,
    width?: number,
    height?: number,
}

const SvgIcon = (props: props) => {
    return (
        <svg className="icon" aria-hidden="true" style={{ width: props.width, fill: props.fill, height: props.height }}>
            <use xlinkHref={"#icon-" + props.iconname}></use>
        </svg>
    );
}

export default SvgIcon;