'use client'

import React from 'react'
import styles from "../../styles/Hero.module.css"
import Image from 'next/image';
import hero from "../../public/Hero-Img.png"
import TypingAnimation from "@/components/magicui/typing-animation";
import AnimatedBeam from "@/components/custom/AnimatedBeam"
import Nearby from "@/components/custom/Nearby"
import { useState, useEffect } from 'react';
import apple from "@/public/apple.png"
import android from "@/public/android.png"
import { userAgent } from 'next/server';
import LinkUp from './LinkUp';
import WhatsNew from './WhatsNew';

function Hero() {

    const [os, setOs] = useState<string | null>(null);
    let detectedOs: string | null = null;

    useEffect(() => {
        const userAgent = navigator.userAgent;

        if (userAgent.includes('Win')) {
            detectedOs = 'Windows';
        } else if (userAgent.includes('Mac')) {
            detectedOs = 'macOS';
        } else if (userAgent.includes('Linux')) {
            detectedOs = 'Linux';
        } else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
            detectedOs = 'iOS';
        } else if (userAgent.includes('Android')) {
            detectedOs = 'Android';
        }

        setOs(detectedOs);

        console.log(detectedOs);


    }, [userAgent]);
    return (


        <React.Fragment>
            <div id='home' className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroLeftCard}>
                        <h1 className={styles.title}>The <span className={styles.spanText}>Student</span> App That Does It All.</h1>

                        <p className={styles.subTitle}>
                            Say goodbye to FOMO!  Connect with classmates who share your passions, discover the coolest events happening on & off campus, and <span className={styles.spanText}>build friendships</span> that'll last a lifetime.
                        </p>

                        <div style={{ color: "#A2A2A2" }}>
                            <TypingAnimation className="text-base text-left font-semibold " text="Arriving to your university December 6th." />
                        </div>

                        <div className={styles.heroBtnContainer}>
                            {/* {
                                os === "macOS" ?
                                    <button className={styles.downloadBtn}>
                                        <p>Download on</p>
                                        <Image alt='apple-logo' src={apple} className={styles.osLogo}></Image>
                                    </button>
                                    :
                                    os === "Android" ?
                                        <button className={styles.downloadBtn}>
                                            <p>Download on</p>
                                            <Image alt='apple-logo' src={android} className={styles.osLogo}></Image>
                                        </button>
                                        :
                                        <button className={styles.downloadBtn}>
                                            <p>Available on</p>
                                            <Image alt='apple-logo' src={apple} className={styles.osLogo}></Image>
                                            <p>and</p>
                                            <Image alt='apple-logo' src={android} className={styles.osLogo}></Image>
                                        </button>
                            } */}

                            <a href='/interest'>
                                <button className={styles.downloadBtn}>
                                    <p>Register Interest!</p>
                                </button>
                            </a>

                        </div>
                        <div className={styles.heroImgCon}>
                            <Image alt='hero img' className={styles.heroImg} src={hero}></Image>
                        </div>

                    </div>

                    <div className={styles.heroRightCardsContainer}>

                        <div className={styles.heroRightTopCard}>
                            <h3 className={styles.heroRightTopCardTitle}>Boost your <span className={styles.spanText}>connections</span>!</h3>
                            <AnimatedBeam></AnimatedBeam>
                        </div>

                        <div className={styles.heroRightBottomCard}>
                            <h3 className={styles.heroRightBottomCardTitle}><span className={styles.spanText}>Friends &gt; Finals?</span> Time for a Social Life Glow-Up!</h3>
                            <p className={styles.heroRightBottomCardTitleDesc}>Life's too short for lonely lunch sessions. Find your people and make <span className={styles.spanText}>collge</span> unforgettable. Ditch the stress and make memories that will last forever.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className='my-20'>
                <VelocityScroll
                    text="Ready?"
                    default_velocity={5}
                    className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                />
            </div> */}

            <LinkUp></LinkUp>
            <Nearby></Nearby>
            <WhatsNew></WhatsNew>

        </React.Fragment>

    )
}

export default Hero