import styles from './Login.module.css'
import Image from "next/image";

const Login = () => {
    return (
        <section className={styles.login}>
            <Image className={styles.logo} width={49} height={48} src={'/loginLogo.svg'} alt={'logo'}/>
            <h2 className={styles.login_p}>Вход ВКонтакте</h2>
            <form action="post" className={styles.form}>
                <input className={styles.name} type="text" placeholder='Телефон или почта'/>
                <div className={styles.box}>
                    <input id={'check'} type="checkbox"/>
                    <label className={styles.label} htmlFor={'check'}>Сохранить вход</label>
                </div>
                <button className={styles.loginBut}>Войти</button>
            </form>
<!--             <div className={styles.qr_code}>
                <div className={'w-[76px] h-[76px] bg-[#FFFFFF] rounded-[8px]'}></div>
                <div className={styles.text_qr_code}>
                    <p className={'text-[14px]'}>Быстрый вход по QR‑коду</p>
                    <p className={'text-[13px] text-[#828282]'}>Наведите камеру телефона</p>
                    <span className={'text-[14px] text-[#71AAEB] flex items-start pt-[8px]'}>Подробнее</span>
                </div>
            </div> -->
        </section>
    )
}
export default Login
