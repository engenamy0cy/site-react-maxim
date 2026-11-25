import style from './style.module.css'

/**
 * Блок «Отзывы покупателей»
 */
export const Reviews: React.FC = () => {
    return (
        <section className={style.block}>
            <h2 className={style.title}>Что говорят наши покупатели</h2>

            <div className={style.list}>
                <div className={style.card}>
                    <p className={style.quote}>
                        «Отличный магазин, купил консоль с доставкой за день. Рекомендую!»
                    </p>
                    <p className={style.author}>— Александр, Москва</p>
                </div>

                <div className={style.card}>
                    <p className={style.quote}>
                        «Заказал игру, пришла быстро, всё в perfect состоянии. Спасибо!»
                    </p>
                    <p className={style.author}>— Мария, Санкт-Петербург</p>
                </div>

                <div className={style.card}>
                    <p className={style.quote}>
                        «Широкий ассортимент и честные цены. Теперь покупаю только здесь.»
                    </p>
                    <p className={style.author}>— Дмитрий, Екатеринбург</p>
                </div>
            </div>
        </section>
    );
}
