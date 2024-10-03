import React, { useState } from 'react'
import styles from './Footer.module.css'
import footerLogo from '../../assets/footerLogo.png'
import { ReactComponent as Facebook } from '../../assets/IconsFacebook.svg'
import { ReactComponent as Instagrm } from '../../assets/IconsInstagrm.svg'
import { ReactComponent as Twitter } from '../../assets/IconsTwitter.svg'
import Link from '../UI/Link/Link'

import FooterInput from '../UI/FooterInput/FooterInput'
import FooterIcons from '../../assets/FooterIcons.svg'
import FooterEmail from '../../assets/FooterEmail.svg'
import FooterInputText from '../../assets/FooterInputText.svg'
import Button from '../UI/Button/Button'
import Popup from '../UI/Popup/Popup'

export default function Footer() {
  const [modalActive, setModalActive] = useState(false);

  const sendContactsHandler = () => {
    setModalActive(true)
    // alert(1)
  }


  return (
    <div className={styles.footerContantContainer}>
        <div className={styles.footerContant}>
              <div className={styles.footerContantElement}>
                    <a href="/">
                        <img src={footerLogo} alt="footerLogo" className={styles.footerElementImg} />
                    </a>
                    <div className={styles.footerElementMediaContainer}>
                      <a href="/" className={styles.footerElementMedia}><Twitter className={styles.icon}/></a>
                      <a href="/" className={styles.footerElementMedia}><Instagrm className={styles.icon}/></a>
                      <a href="/" className={styles.footerElementMedia}><Facebook className={styles.icon}/></a>
                    </div>
              </div> 
              <div className={styles.footerContantElement}>
                    <h2 className={styles.footerContantTitle}>Resource</h2>
                    <Link childrenHref="#" cheildrenContent={'Resume builder'}/>
                    <Link childrenHref="#" cheildrenContent={'Resume analyzer'}/>
                    <Link childrenHref="#" cheildrenContent={'Registration'}/>
                    <Link childrenHref="#" cheildrenContent={'Login'}/>
              </div> 
              <div className={styles.footerContantElement}>
                    <h2 className={styles.footerContantTitle}>Company</h2>
                    <Link childrenHref="#" cheildrenContent={'Contacts'}/>
                    <Link childrenHref="#" cheildrenContent={'Term of service'}/>
                    <Link childrenHref="#" cheildrenContent={'Privacy policy'}/>
              </div>
              <div className={styles.footerContantElement}>
                <h2 className={styles.footerContantTitle}>Do you have questions?</h2>
                  <FooterInput src={FooterIcons} placeholder={'Your full name'} type={'text'}/>
                  <FooterInput src={FooterEmail} placeholder={'Your email'} type={'email'}/>
                  <FooterInput src={FooterInputText} placeholder={'Your questions'} type={'text'}/>
                  <div className={styles.footerContantButtonContainer}>
                    <Button onClick={sendContactsHandler} children='Send' className={styles.footerContantButton} />
                  </div>
              </div> 
        </div>
      <div className={styles.creativityContainer}>
        <div className={styles.creativityContant}>&#169; 2024 Creativity Inc. All rights reserved</div>
      </div>
      {modalActive && (
            <Popup active={modalActive} setActive={setModalActive}>
              <div className={styles.footerPopup}>
                <h4 className={styles.footerPopupTitle}>THANK YOU!</h4>
                <p className={styles.footerPopupSubTitle}>
                  Thank you for your question. It is important for us to be useful to you. The answer will come to you by mail.
                </p>
                <p className={styles.footerPopupSubTitle}>Thank you for choosing us - we work for you!</p>
                <p className={styles.footerPopupSubTitleLeave}>
                  Best regards,
                </p>
              <span>Jobseeker!</span>
              </div>
            </Popup>
          )}
    </div>
  )
}
