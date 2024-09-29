import React from 'react'
import styles from './Link.module.css'

export default function Link({cheildrenContent,childrenHref}) {
  return (
    <div className={styles.cheildrenContentContainer}>
      <a href={childrenHref} className={styles.cheildrenContentLink} >{cheildrenContent}</a>
    </div>
  )
}
