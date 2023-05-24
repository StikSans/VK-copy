import Image from "next/image";
import Container from "@/components/global/container/Container";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Image width={136} height={24} src={'/logo.svg'} alt={'logo'}/>
            </Container>

        </header>
    )
}
export default Header