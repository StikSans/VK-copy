import styles from './Mobile.module.css'
import Image from "next/image";

const Mobile = () => {
    return(
        <section className={styles.mobile}>
            <div className={'flex justify-between'}>
                <div className={'px-[24px] py-[32px]'}>
                    <h2 className={'text-[20px] mb-[16px]'}>ВКонтакте<br/>для мобильных<br/>устройств</h2>
                    <p className={'text-[14px] text-[#939393]'}>Скачать для iOS</p>
                    <p className={'text-[14px] text-[#939393]'}>из <a href=""  className={'text-[#71AAEB]'}>App Store</a> или Android</p>
                    <p className={'text-[14px] text-[#939393]'}>из <a href="" className={'text-[#71AAEB]'}>Google Play</a> и <a href="" className={'text-[#71AAEB]'}>RuStore</a></p>
                </div>
                <Image className={'pt-[36px] pr-[32px]'} src={'/n3HWOMHG4s8.png'} width={350} height={200} alt={'mobile'}/>
            </div>
        </section>
    )
}
export default Mobile