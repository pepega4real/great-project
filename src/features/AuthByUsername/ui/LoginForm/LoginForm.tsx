import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface LoginModalProps {
  className?: string
}

export const LoginForm = ({ className }: LoginModalProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input autofocus placeholder={t('Введите username')} type='text' className={cls.input} />
      <Input placeholder={t('Введите пароль')} type='text' className={cls.input} />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  )
}
