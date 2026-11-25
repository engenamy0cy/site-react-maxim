import style from './style.module.css'

/**
 * Блок «Преимущества»
 */
export const Advantages: React.FC = () => {
    return (
        <section className={style.block}>
            <h2 className={style.title}>Почему выбирают нас</h2>

            <div className={style.list}>
                <div className={style.card}>
                    <h3>Быстрая доставка</h3>
                    <p>Доставка за 1-3 дня по всей стране</p>
                </div>

                <div className={style.card}>
                    <h3>Консультация экспертов</h3>
                    <p>Бесплатные консультации по выбору оборудования</p>
                </div>

                <div className={style.card}>
                    <h3>Гарантия качества</h3>
                    <p>12-месяцная гарантия на все товары</p>
                </div>
            </div>
        </section>
    );
}