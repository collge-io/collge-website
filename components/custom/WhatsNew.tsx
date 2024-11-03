import React from 'react'

import styles from "../../styles/WhatsNew.module.css"
import SparklesText from '@/components/magicui/sparkles-text'
import Image from 'next/image'
import club from "@/public/club.png"
import party from "@/public/party.png"
import confession from "@/public/confession.png"
import wink from "@/public/wink.png"

function WhatsNew() {
    return (

        <section id='whats-new' className={styles.whatsNewSection}>

            <SparklesText text="What else?"></SparklesText>

            <div className={styles.whatsNewCardsContainer}>
                {/* <div className={styles.edgeCardsContainer}>
                    <div className={`${styles.edgeCard} ${styles.marginRight}`}>
                        <div className={styles.edgeCardImgTitleCon}>
                            <Image className={styles.edgeCardImg} alt='club logo' src={club}></Image>
                            <p className={styles.edgeCardTitle}>Clubs</p>
                        </div>
                        <p className={styles.edgeCardDesc}>Don't just be a student, be a member. Join an exclusive campus club and gain access to a world of knowledge, connections, and experiences that will set you apart.</p>
                    </div>

                    <div className={`${styles.edgeCardsContainer} ${styles.isVisible}`}>
                        <div className={styles.edgeCard}>
                            <div className={styles.edgeCardImgTitleCon}>
                                <Image className={styles.edgeCardImg} alt='club logo' src={party}></Image>
                                <p className={styles.edgeCardTitle}>Parties</p>
                            </div>
                            <p className={styles.edgeCardDesc}>Don't be that person who stayed in. Join or a throw a department party, meet new people, and show off your best moves. From rooftop raves to basement bangers, there's a party for everyone.</p>
                        </div>
                    </div>
                </div> */}

                <div className={styles.centerCards}>
                    <div className={`${styles.centerCard} ${styles.marginRight}`}>
                        <div className={styles.centerCardImgHolder}>
                            <Image className={styles.centerCardImg} alt='confession image' src={confession} />
                        </div>
                        <div className={styles.centerCardTextHolder}>
                            <h1 className={styles.centerCardTitle}>Confessions</h1>
                            <h4 className={styles.centerCardSubTitle}>Your secrets are safe with us... until we share them with everyone (anonymously, of course).</h4>
                        </div>
                    </div>

                    <div className={`${styles.centerCard} ${styles.secondCard}`} style={{ flexDirection: "row-reverse" }}>
                        <div className={styles.centerCardImgHolder}>
                            <Image className={`${styles.centerCardImg} ${styles.removeMarginRightFromImage}`} alt='wink image' src={wink} />
                        </div>
                        <div className={`${styles.centerCardTextHolder}`}>
                            <h1 className={styles.centerCardTitle}>Wink</h1>
                            <h4 className={styles.centerCardSubTitle} style={{ marginRight: "8px" }}>Digital flirting for the digitally shy. No need for pickup lines, just a wink will do!</h4>
                        </div>
                    </div>
                </div>

                {/* <div className={`${styles.edgeCardsContainer} ${styles.isBottomCardVisible}`}>
                    <div className={styles.edgeCard}>
                        <div className={styles.edgeCardImgTitleCon}>
                            <Image className={styles.edgeCardImg} alt='club logo' src={party}></Image>
                            <p className={styles.edgeCardTitle}>Parties</p>
                        </div>
                        <p className={styles.edgeCardDesc}>Don't be that person who stayed in. Join or throw a department party, meet new people, and show off your best moves. From rooftop raves to basement bangers, there's a party for everyone.</p>
                    </div>
                </div> */}
            </div>

        </section>

    )
}

export default WhatsNew