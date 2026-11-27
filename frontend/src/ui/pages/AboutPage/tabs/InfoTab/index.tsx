import style from './style.module.css'

/**
 * Таб «Информация»
 */
export const InfoTab = () => {
    return (
        <div className={style.tab}>
            <h2>О магазине</h2>
            <p className={style.lead}>
                «Кальянная лавка» — магазин для тех, кто ценит качество и уют.
                У нас вы найдёте кальяны, табак, вейпы и всё для идеального вечера.
            </p>

            <ul className={style.list}>
                <li><strong>Кальяны</strong> — от классических моделей до современных компактных</li>
                <li><strong>Табак</strong> — проверенные производители и большой выбор вкусов</li>
                <li><strong>Вейпы</strong> — устройства и расходники на любой вкус</li>
                <li><strong>Аксессуары</strong> — угли, чаши, калауды и многое другое</li>
            </ul>
        </div>
    );
}