import React from 'react'
import { FadeText } from "@/components/magicui/fade-text";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import blazeLinkUp from "@/public/Blaze-LinkUp.png"
import styles from "@/styles/Blaze.module.css"
import Image from 'next/image'

import { cn } from "@/lib/utils";
import { AnimatedListDemo } from "@/components/custom/AnimatedList"

function Blaze() {
    return (
        <React.Fragment>
            <section className="w-full h-[85vh] lg:h-[85vh]">
                <div className={`${styles.wrapperContainer} px-16`}>
                    <FadeText
                        className="lg:text-8xl text-7xl text-center font-bold text-black dark:text-white"
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.2 } },
                        }}
                        text="Level Up With "
                    />
                    <AnimatedGradientText>

                        <span
                            className={cn(
                                `inline lg:text-8xl text-7xl animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                            )}
                        >
                            Blaze
                        </span>
                    </AnimatedGradientText>
                </div>
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 overflow-hidden",
                    )}
                />
            </section>

            {/* WHO VISITED */}
            <section className="w-full h-[85vh] lg:h-[85vh] lg:mt-6">
                <div className={`${styles.wrapperContainer}`}>
                    <h1 className='lg:text-5xl text-3xl mb-6 font-bold text-black dark:text-white text-center'>Know who <span style={{ color: "#45EA69" }}>visited</span> your profile!</h1>
                    <p className='text-sm lg:text-lg text-black dark:text-[#A2A2A2] text-center'>Get notified when someone visits your profile!</p>
                    <AnimatedListDemo />
                </div>
            </section>

            {/* WHO VISITED */}
            <section className="w-full h-[85vh] lg:h-[85vh] lg:mt-6">
                <div className={`${styles.wrapperContainer}`}>
                    <h1 className='lg:text-5xl text-3xl mb-6 font-bold text-black dark:text-white text-center'>Go beyond your <span style={{ color: "#45EA69" }}>university!</span></h1>
                    <p className='text-sm lg:text-lg text-black dark:text-[#A2A2A2] text-center'>Meet new people from your city!</p>
                    <Image style={{ marginTop: "2rem" }} className={styles.linkUpLeftCardImg} alt="link up img" src={blazeLinkUp}></Image>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Blaze