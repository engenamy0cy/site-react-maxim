import style from './style.module.css'

/**
 * Таб «История»
 */
export const HistoryTab = () => {
    return (
        <div className={style.tab}>
            <h2>Наша история</h2>
            <p className={style.lead}>
                Всё началось с небольшой лавки в Оренбурге и нескольких любимых кальянов.
            </p>

            <ol className={style.timeline}>
                <li>
                    <strong>2024</strong>
                    <span>Открыли первый магазин: десять кальянов и пара вкусов табака.</span>
                </li>
                <li>
                    <strong>2025</strong>
                    <span>Расширили ассортимент — добавились вейпы, аксессуары и доставка по России.</span>
                </li>
                <li>
                    <strong>2026</strong>
                    <span>Более 500 товаров и тысячи довольных клиентов по всей стране.</span>
                </li>
            </ol>
        </div>
    );
}