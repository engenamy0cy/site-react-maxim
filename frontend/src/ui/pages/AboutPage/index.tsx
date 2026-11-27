import { useState, useEffect } from 'react'
import { Button } from '../../components/Button'
import style from './style.module.css'
import { tabs as data } from './data'
import { InfoTab } from './tabs/InfoTab'
import { HistoryTab } from './tabs/HistoryTab'
import { ContactsTab } from './tabs/ContactsTab'
import type { Tabs } from './types'
import { useGetUser } from '../../hooks/useGetUser'

export const AboutPage: React.FC = () => {
  const {
      isError,
      isLoading,
      onRetry,
      user,
  } = useGetUser({
    userId: 1,
  });
  const [tab, setTab] = useState<Tabs>('info')






  // useEffect(() => {
  //   setStatus('страница загружена')
  // }, [])

  return (
    <div className={style.page}>
      <h1 className={style.title}>О нас</h1>

      {isError && (
        <div>
          <p>Ошибка</p>
          <button onClick={onRetry}>Повторить</button>
        </div>
      )}

      {isLoading && (
        <p>Загрузка...</p>
      )}

      {user && (
        <div>
          <p>{user.age}</p>
          <p>{user.name}</p>
        </div>
      )}

      
      <div className={style.status}>{status}</div>

      <div className={style.tabs}>
        {data.map((item) => (
          <Button
            key={item.type}
            label={item.lable}
            mode="primary"
            disabled={tab === item.type}
            onClick={() => setTab(item.type)}
          />
        ))}
      </div>

      <div className={style.content}>
        {tab === 'info' && <InfoTab />}
        {tab === 'history' && <HistoryTab />}
        {tab === 'contacts' && <ContactsTab />}
      </div>
    </div>
  )
}
