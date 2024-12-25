import React from 'react'
import Button from '../../../../../../components/UI/Button/Button'

import styles from "./ControlBtns.module.css"

const ControlBtns = ({ reset}) => {
  return (
    <div className={styles.btnsContainer}>
        <Button type="button" className={styles.delete} onClick={reset}>Delete</Button>
        <Button type="submit" className={styles.save}>Save</Button>
    </div>
  )
}

export default ControlBtns