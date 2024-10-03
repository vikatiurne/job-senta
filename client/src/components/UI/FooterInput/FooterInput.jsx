import React from 'react'
import styles from './FooterInput.module.css'

export default function FooterInput({type,placeholder,src}) {
  return (
    <div className={styles.footerInputContainer}>
        <input type={type} placeholder={placeholder} className={styles.footerInput} />
        <img src={src} alt={`icon: ${src}`} className={styles.footerImage} />  
    </div>
  )
}
