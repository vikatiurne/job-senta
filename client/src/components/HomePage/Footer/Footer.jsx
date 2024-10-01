import React from 'react'
import styles from './Footer.module.css'
import footerLogo from '../../../assets/footerLogo.png'
import IconsTwitter from '../../../assets/IconsTwitter.svg'
import IconsInstagrm from '../../../assets/IconsInstagrm.svg'
import IconsFacebook from '../../../assets/IconsFacebook.svg'
import Link from '../../UI/Link/Link'
import Input from '../../UI/Input/Input';

export default function Footer({}) {
  return (
    <div className={styles.footerContantContainer}>
        <div className={styles.footerContant}>
              <div className={styles.footerContantElement}>
                    <a href="/">
                        <img src={footerLogo} alt="footerLogo" className={styles.footerElementImg} />
                    </a>
                    <div className={styles.footerElementMediaContainer}>
                      <a href="#" className={styles.footerElementMediaElementLink}>
                          <img src={IconsTwitter} alt="IconsTwitter" className={ styles.footerElementMedia} />
                      </a>
                      <a href="#" className={styles.footerElementMediaElementLink}>
                                    <img src={IconsInstagrm} alt="IconsInstagrm" className={ styles.footerElementMedia} />
                      </a>  
                      <a href="#" className={styles.footerElementMediaElementLink}>
                                    <img src={IconsFacebook} alt="IconsFacebook" className={ styles.footerElementMedia} />
                      </a>  
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
                  {/* <Input placeholder={'q'} /> */}
              </div> 
        </div>
      <div className={styles.creativityContainer}>
        <div className={styles.creativityContant}>&#169; 2024 Creativity Inc. All rights reserved</div>
        </div>
    </div>
  )
}
