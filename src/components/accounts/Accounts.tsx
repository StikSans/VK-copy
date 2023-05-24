import styles from './Accounts.module.css'
import Image from "next/image";

const Accounts = () => {
    return (
        <section className={styles.accounts}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Недавно входили на сайт с этого компьютера</h2>
                <p className={styles.description}>Нажмите на фотографию или имя, чтобы войти</p>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Image className={'rounded-[100px] bg-[#666] mx-auto'} src={'/ava.png'} width={80} height={80} alt={'ava'}/>
                        <p>Рукавчук Роман</p>
                    </li>
                    <li className={styles.item}>
                        <div></div>
                        <p>Войти в другой аккаунт</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Accounts