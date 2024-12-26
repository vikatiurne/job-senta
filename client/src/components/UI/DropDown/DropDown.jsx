
import cn from 'classnames'
import style from './DropDown.module.css'


const DropDown = (props) => {
    const { children, className, activeClass, maxHeight, ...Props } = props
    return (
        <div
            className={cn(style.dropDown, className,
                { [style.dropDownActive]: activeClass }

            )}
            style={{
                maxHeight: (activeClass) ? maxHeight : '0px'
            }}
            {...Props}
        >
            {children}
        </div >
    );
};

DropDown.propTypes = {

}


export default DropDown;