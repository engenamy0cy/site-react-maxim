import { useState, useEffect } from 'react'
import { Button } from '../../components/Button'
import style from './style.module.css'
import { tabs as data } from './data'
import { InfoTab } from './tabs/InfoTab'
import { HistoryTab } from './tabs/HistoryTab'
import { ContactsTab } from './tabs/ContactsTab'

export const AboutPage = () => {
  const [active, setActive] = useState(data[0].type)
  const [status, setStatus] = useState('')

  useEffect(() => {
    setStatus('страница загружена')
  }, [])

  return (
    <div className={style.page}>
      <h1 className={style.title}>О нас</h1>

      <div className={style.status}>{status}</div>

      <div className={style.tabs}>
        {data.map((tab) => (
          <Button
            key={tab.type}
            label={tab.lable}
            mode="primary"
            disabled={active === tab.type}
            onClick={() => setActive(tab.type)}
          />
        ))}
      </div>

      <div className={style.content}>
        {active === 'info' && <InfoTab />}
        {active === 'history' && <HistoryTab />}
        {active === 'contacts' && <ContactsTab />}
      </div>
    </div>
  )
}
