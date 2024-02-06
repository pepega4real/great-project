import { useTranslation } from 'react-i18next'

import { Button } from 'shared/ui/Button/Button'

import cls from './PageError.module.scss'

export const PageError = () => {
  const { t } = useTranslation()

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  return (
    <div className={cls.PageError}>
      <h1>{t('Что-то пошло не так')}</h1>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
}
