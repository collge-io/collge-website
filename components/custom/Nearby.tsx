import React from 'react'
import styles from "@/styles/Nearby.module.css"
import Image from 'next/image'
import nearby from "@/public/nearby.png"
import Ripple from "@/components/magicui/ripple";
import notification from "@/public/notification.png"

function Nearby() {
    return (
        <section id='nearby' className={styles.nearby}>

            <div className={styles.nearbyContainer}>
                <div className={styles.nearbyCardsConTop}>
                    <div className={styles.topCardLeft}>

                        <h1 className={styles.topLeftCardTitle}>Nearby</h1>
                        <h4 className={styles.topLeftCardSubTitle}>Shake. <span style={{ color: "#45EA69" }}>Shake.</span> Shake.</h4>

                        <Image className={styles.topLeftCardImg} alt='nearby image' src={nearby}></Image>
                    </div>

                    <div className={styles.topCardRight}>
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl rounded-3xl">
                            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-[#FAFAFA]">
                                A <span style={{ color: "#45EA69" }}>New</span> Way To <span style={{ color: "#45EA69" }}>Find People</span>
                            </p>
                            <Ripple />
                        </div>
                    </div>
                </div>

                <div className={styles.nearbyCardsConBottom}>
                    <div className={styles.bottomCardLeft}>
                        <h1 className={styles.bottomCardLeftTitle}>Shake & <span style={{ color: "#45EA69" }}>Connect.</span></h1>
                        <p className={styles.bottomCardLeftDesc}>Because swiping is so 2024. Find your people with a little elbow grease! Just give your phone a <span style={{ color: "#45EA69" }}>shake</span>, and we'll find you someone nearby who's also looking for a new friend.</p>
                    </div>

                    <div className={styles.bottomCardCenter}>
                        <Image className={styles.bottomCardImg} alt='notification icon' src={notification}></Image>
                        <p className={styles.bottomCardLeftDesc}>Get notified every time someone finds you using <span style={{ color: "#45EA69" }}>Nearby.</span></p>
                    </div>

                    <div className={styles.bottomCardLeft}>
                        <h1 className={styles.bottomCardLeftTitle}>Privacy & <span style={{ color: "#45EA69" }}>Comfort.</span></h1>
                        <p className={styles.bottomCardLeftDesc}>At <span style={{ color: "#45EA69" }}>Collge</span>, we know everyone's different when it comes to socializing. That's why our Nearby feature is totally up to you.  Want to meet new people? <span style={{ color: "#45EA69" }}>Turn it on!</span> Not in the mood? <span style={{ color: "#45EA69" }}>Turn it off.</span></p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Nearby