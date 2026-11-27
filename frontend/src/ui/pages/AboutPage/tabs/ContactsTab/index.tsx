import { useEffect, useState } from 'react'
import style from './style.module.css'

/**
 * Таб «Контакты»
 * Интерактив: часы обновляются каждую секунду (useState + useEffect),
 * адрес скрывается/показывается по кнопке (useState).
 */
export const ContactsTab = () => {
    const [showAddress, setShowAddress] = useState(false)
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className={style.tab}>
            <h2>Контакты</h2>

            <ul className={style.list}>
                <li><strong>Телефон:</strong> +7 (912) 345-67-89</li>
                <li><strong>Email:</strong> info@kalyannaya-lavka.ru</li>
                <li><strong>Режим работы:</strong> ежедневно, 10:00–22:00</li>
            </ul>

            <button
                className={style.button}
                onClick={() => setShowAddress(!showAddress)}
            >
                {showAddress ? 'Скрыть адрес' : 'Показать адрес'}
            </button>
            {showAddress && (
                <p className={style.address}>г. Оренбург, ул. Свободина, 4/3</p>
            )}
        </div>
    );
}