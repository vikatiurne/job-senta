import React from 'react';
import PropTypes from 'prop-types';
import style from './ModalBase.module.css'
import Portal from '../../hoc/portal/portal.js'
import cn from 'classnames'

const ModalBase = (props) => {
    const {
        children,
        onClose,
        classModal,
        classModalContent

    } = props


    return (
        <Portal
            component={<div
                className={style.modalWrap}
                onClick={(e) => {
                    if (e.target.classList.contains(style.modalWrap)) {
                        onClose()
                    }
                }}
            >
                <div className={cn(style.modal, classModal)}>
                    <div className={classModalContent}>
                        {children}
                    </div>
                </div>
            </div>
            }
        />

    );
};

ModalBase.propTypes = {
    children: PropTypes.any,
    onClose: PropTypes.func,
    classModalWrap: PropTypes.string,
    classModalContent: PropTypes.string
};

export default ModalBase;