import React from 'react'
import SparklesText from '@/components/magicui/sparkles-text'
import styles from '../../styles/DeleteYourData.module.css'
import confession from "@/public/Rectangle.png"
import Image from 'next/image'
import wink from "@/public/wink.png"
import spillTheDeet from "@/public/confession.png"
const DeleteYourData = () => {
    
  return (
    <section className="w-full h-[85vh] lg:h-[85vh] flex flex-col">
      <div className='flex flex-col  py-10 justify-center items-center'>
        <SparklesText text="Delete Your Account"></SparklesText> 
      </div>
      <div className='flex flex-col  justify-center items-center w-full'>
        <div className={styles.centerCards}>
                <div className={`${styles.centerCard} ${styles.marginRight}`}>
                    <div className={styles.centerCardImgHolder}>
                        <Image className={styles.centerCardImg} alt='confession image' src={confession} />
                    </div>
                    <div className={styles.centerCardTextHolder}>
                        <h1 className={styles.centerCardTitle}>Already ready to ghost us? 👻 No hard feelings!</h1>
                        <h4 className={styles.centerCardSubTitle}>We'll Miss You Too :(</h4>
                    </div>
                </div>

              <div className={`${styles.centerCard} ${styles.secondCard}`} style={{ flexDirection: "row-reverse" }}>
                    <div className={styles.centerCardImgHolder}>
                        <Image className={`${styles.centerCardImg} ${styles.removeMarginRightFromImage}`} alt='wink image' src={wink} />
                      </div>
                      <div className={`${styles.centerCardTextHolder}`}>
                          <h1 className={styles.centerCardTitle}>Tap that "Account Deletion" button</h1>
                          <h4 className={styles.centerCardSubTitle} style={{ marginRight: "8px" }}> it’s the big red one, you can’t miss it. 🔥</h4>
                      </div>
              </div>
              
              <div className={`${styles.centerCard} ${styles.marginRight}`}>
                    <div className={styles.centerCardImgHolder}>
                        <Image className={styles.centerCardImg} alt='confession image' src={spillTheDeet} />
                    </div>
                    <div className={styles.centerCardTextHolder}>
                        <h1 className={styles.centerCardTitle}>Spill the details</h1>
                        <h4 className={styles.centerCardSubTitle}>Username 🎭
                        University Email 📧 (Or the one you used to rock that facial recognition magic)
                        University Name 🎓
                        Campus 🏫
                        Year of Graduation 🎓
                        </h4>
                    </div>
              </div>

              <div className={`${styles.centerCard} ${styles.secondCard}`} style={{ flexDirection: "row-reverse" }}>
                    <div className={styles.centerCardImgHolder}>
                        <Image className={`${styles.centerCardImg} ${styles.removeMarginRightFromImage}`} alt='wink image' src={wink} />
                      </div>
                      <div className={`${styles.centerCardTextHolder}`}>
                          <h1 className={styles.centerCardTitle}>Hit ‘Submit Request’</h1>
                          <h4 className={styles.centerCardSubTitle} style={{ marginRight: "8px" }}> poof! 🪄 A friendly popup will confirm your request has been sent to us for review.</h4>
                      </div>
              </div>

              <div className={`${styles.centerCard} ${styles.marginRight}`}>
                    <div className={styles.centerCardImgHolder}>
                        <Image className={styles.centerCardImg} alt='confession image' src={confession} />
                    </div>
                    <div className={styles.centerCardTextHolder}>
                        <h1 className={styles.centerCardTitle}>Sit tight for 24-48 hours ⏳</h1>
                        <h4 className={styles.centerCardSubTitle}>while we work our magic and process your request. You’ll officially be free to “move on” when it’s done.</h4>
                    </div>
              </div>
      
             
        </div>
      </div>
                         
    </section>
  )
}

export default DeleteYourData
