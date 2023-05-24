import styles from "./Register.module.css"
import Link from "next/link";

const Register = () => {
    return (
        <section className={styles.register}>
            <div className={'flex flex-col'}>
                <Link href={'/register'} className={styles.but}>Зарегистрироваться</Link>
                <div className={'text-[13px] mt-[12px] text-[#656565]'}>
                    <p className={''}>После регистрации вы получите доступ</p>
                    <p>ко всем возможностям VK ID</p>
                    <p className={'text-[#939393]'}>Узнать больше</p>
                </div>
            </div>

        </section>
    )
}

export default Register