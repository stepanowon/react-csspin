import PropTypes from 'prop-types'
import './ReactCsspin.css';

type PropType = {
    message: string;
    spinStyle: string;
    opacity: number;
    color: string;
}

const ReactCsspin = ({ message, spinStyle, opacity, color }: PropType) => {
  let spinClass = "cp-spinner " + spinStyle;
  return (
    <div className="react-csspin-modal" style={{backgroundColor:color, opacity:opacity }}>
        <div className="react-csspin-box">
            <div className={spinClass}></div>
            <div style={{ margin:"1rem" }}>{message}</div>
        </div>
    </div>
  )
}

ReactCsspin.propTypes = {
    message: PropTypes.string,
    spinStyle: PropTypes.string,
    opacity: (props:any, propName:string, component:string)=> {
        if (propName === "opacity") {
            if (props[propName] > 1 && props[propName] < 0) {
              return new Error(`${propName}속성의 값은 0~1 범위의 값만 허용합니다(at ${component}).`);
            }
        }
    },
    color: PropTypes.string,
};

ReactCsspin.defaultProps = {
    message: "Loading",
    spinStyle: "cp-round",
    color: "white",
    opacity: 0.3
};

export default ReactCsspin;