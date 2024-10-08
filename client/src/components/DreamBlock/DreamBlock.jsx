import React from 'react'
import styles from './DreamBlock.module.css'
import DreamBlockIcon from '../../assets/DreamJioIcon.png' 
import Button from '../UI/Button/Button'

export default function DreamBlock() {
  return (
    <div className={styles.dreamBlockContainer}>
          <div className={styles.dreamBlockContent}>
                <div className={styles.dreamContentIconContent}>
                    <img src={DreamBlockIcon} alt="DreamBlockIcon" className={styles.dreamContentIcon} />  
                </div> 
              <div className={styles.dreamBlockContentElement}>
                <h2 className={styles.dreamContentTitle}>Your resume is the key to your dream job!</h2>  
                <div className={styles.dreamContentSubTitle}>Our service helps you create a professional resume in minutes. Thanks to artificial intelligence, you will receive analysis and recommendations for improvement to stand out from other candidates.</div>  
                <div className={styles.dreamContentButtonContainer}>
                    <Button className={styles.dreamContentButton}>Try it free</Button>
                </div>
              </div>
        </div>
    </div>
  )
}
