import classNames from "classnames";
import style from "./style.module.css"
import { HeaderLink } from "../../components/HeaderLink";


/**
 * шапка сайта
 */
export const Header:React.FC = () => {
    return (
        <header className={classNames(
            'flex content',
            style.header,
        )}>
            <img 
            className={style.logo}
            src="/logo.png" 
            alt="">
            
            </img>

            <nav className="flex g-4">
                <HeaderLink href="" text="о нас"/>
                <HeaderLink href="" text="жижки"/>
                <HeaderLink href="" text="вейпы"/>

                
            </nav>
        </header>
    );
}