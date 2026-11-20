import { useState } from 'react'

export const ContactsTab = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <h2>Контакты</h2>
      <p>Телефон: +7 (912) 345-67-89</p>
      <button onClick={() => setShow(!show)}>
        {show ? 'Скрыть адрес' : 'Показать адрес'}
      </button>
      {show && <p>Адрес: г. Оренбург, ул. Свободина 4/3</p>}
    </div>
  )
}
