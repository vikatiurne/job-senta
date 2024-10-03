import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../hoc/layout/Container/Container';
import style from './Footer.module.css'
import { ReactComponent as Twitter } from '../../assets/icons/IconsTwitterWhite.svg'
import { ReactComponent as Instagram } from '../../assets/icons/IconsInstagrmWhite.svg'
import { ReactComponent as Facebook } from '../../assets/icons/IconsFacebookWhite.svg'
import { ReactComponent as Copyright } from '../../assets/icons/copirightIcon.svg'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Container>
                <ul className={style.footerNav}>
                    <li className={style.footerNavItem}>
                        <h2 className={style.footerNavItemTitle}>FEATURES</h2>
                        <ul className={style.footerItemList}>
                            <li>
                                <a className={style.footerNavItemLink} href="#About us">About us</a>
                            </li>
                            <li>
                                <a className={style.footerNavItemLink} href="#Advantages">Our advantages</a>
                            </li>
                        </ul>
                    </li>
                    <li className={style.footerNavItem}>
                        <h2 className={style.footerNavItemTitle}>RESOURCES</h2>
                        <ul className={style.footerItemList}>
                            <li>
                                <a className={style.footerNavItemLink} href="#FAQ">FAQ</a>
                            </li>
                        </ul>
                    </li>
                    <li className={style.footerNavItem}>
                        <h2 className={style.footerNavItemTitle}>COMPANY</h2>
                        <ul className={style.footerItemList}>
                            <li>
                                <a className={style.footerNavItemLink} href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a className={style.footerNavItemLink} href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </li>
                    <li className={style.footerNavItem}>
                        <h2 className={style.footerNavItemTitle}>FOLLOW US</h2>
                        <ul className={style.footerItemListMessanger}>
                            <li>
                                <a className={style.footerTwitterLink} href="#"><Twitter /></a>
                            </li>
                            <li>
                                <a className={style.footerInstagramLink} href="#"><Instagram /></a>
                            </li>
                            <li>
                                <a className={style.footerFacebookLink} href="#"><Facebook /></a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className={style.footerCopyright}>
                    <div className={style.footerCopyrightIcon}><Copyright /></div>
                    <p className={style.footerCopyrightText}>2024 Creativity Inc. All rights reserved </p>
                </div>

            </Container>
        </footer>
    );
};

Footer.propTypes = {};

export default Footer;