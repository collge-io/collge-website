import React from 'react'
import styles from "@/styles/LinkUp.module.css"
import linkup from "@/public/linkup.png"
import Image from 'next/image'
import NumberTicker from "@/components/magicui/number-ticker";
import { OrbitCicles } from './OrbitCircle';

function LinkUp() {
    return (
        <section className={styles.linkUp}>
            <div className={styles.linkUpCardsContainer}>

                <div className={styles.linkUpLeftCard}>
                    <h1 className={styles.linkUpLeftCardTitle}>Link Up</h1>
                    <p className={styles.linkUpLeftCardSubTitle}>Meet new <span style={{ color: "#45EA69" }}>students</span> on the fly!</p>

                    <Image className={styles.linkUpLeftCardImg} alt="link up img" src={linkup}></Image>
                </div>

                <div className={styles.linkUpRightCardsContainer}>

                    <div className={styles.linkUpRightTopCardsCon}>
                        <div className={styles.linkUpRightTopLeftCard}>
                            <h1 className={styles.linkUpRightTopCardTitle}>A Loner No More!</h1>
                            <p className={styles.linkUpRightTopCardDesc}>Two tickets, one great time. Find your cinema companion.</p>
                        </div>

                        <div className={styles.linkUpRightTopRightCard}>
                            <h1 className={styles.linkUpRightTopRightCardTitle}>Gain Fire!</h1>
                            <p className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-center text-white dark:text-white">
                                <NumberTicker value={100} />
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.LinkUpRightBottomCardCon} ${styles.bottomCard}`}>
                        <OrbitCicles></OrbitCicles>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LinkUp