import classNames from 'classnames';
import style from './style.module.css'
import type {Props} from './type'




export const Button:React.FC<Props>=({
    label = 'кнопка',
    mode = 'primary',
    size = 'medium',
    ...props
})=>{
    return(
    <button
        className={classNames(
            style.component,
            style[mode],
            style[size]
        )}
        {...props}
       > 
       {label}
    </button>
    );
}