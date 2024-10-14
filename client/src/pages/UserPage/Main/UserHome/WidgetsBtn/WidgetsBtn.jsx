import React from 'react';
import PropTypes from 'prop-types';
import style from './WidgetsBtn.module.css'
import { ReactComponent as AddFile } from '../../../../../assets/user_page/home/addfile.svg'
import { ReactComponent as Contact } from '../../../../../assets/user_page/home/contact.svg'
import { ReactComponent as File } from '../../../../../assets/user_page/home/file.svg'
import { ReactComponent as Analyse } from '../../../../../assets/user_page/home/analyse.svg'
import { ReactComponent as User } from '../../../../../assets/user_page/home/user.svg'

import cn from 'classnames'

const WidgetsBtn = ({ className }) => {
    return (
        <section className={cn(style.sectWidget, className)}>
            <ul className={style.sectWidgetList}>
                <li className={style.sectWidgetItem}>
                    <button className={cn(
                        style.sectWidgetBtn,
                        style.sectWidgetBtnImport
                    )}>
                        <AddFile />
                        Import a resume
                    </button>
                </li>
                <li className={style.sectWidgetItem}>
                    <button className={cn(
                        style.sectWidgetBtn,
                        style.sectWidgetBtnContact
                    )}>
                        <Contact />
                        Contacts list
                    </button>
                </li>
                <li className={style.sectWidgetItem}>
                    <button className={cn(
                        style.sectWidgetBtn,
                        style.sectWidgetBtnResume
                    )}>
                        <File />
                        My Resumes
                    </button>
                </li>
                <li className={style.sectWidgetItem}>
                    <button className={cn(
                        style.sectWidgetBtn,
                        style.sectWidgetBtnAnalyse
                    )}>
                        <Analyse />
                        Analyse a resume
                    </button>
                </li>
                <li className={style.sectWidgetItem}>
                    <button className={cn(
                        style.sectWidgetBtn,
                        style.sectWidgetBtnAccount

                    )}>
                        <User />
                        My Account
                    </button>
                </li>
            </ul>
        </section>
    );
};

WidgetsBtn.propTypes = {
    className: PropTypes.object,
};

export default WidgetsBtn;