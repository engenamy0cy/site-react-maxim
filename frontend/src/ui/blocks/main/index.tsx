import style from './style.module.css'

export const Main:React.FC = () =>{
    return(
        <section className={style.block}>
            <div className={style.text}>
                <h1>лучшие кальяны, табак, вейпы по лучшим ценам</h1>
                <p>скидки и акции каждый день</p>
            </div>
        </section>
    );
}