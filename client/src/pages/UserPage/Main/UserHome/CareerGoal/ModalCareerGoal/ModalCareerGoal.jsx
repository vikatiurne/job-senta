import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import style from './ModalCareerGoal.module.css'

import { ReactComponent as Close } from '../../../../../../assets/user_page/home/close.svg'
import User from '../../../../../../assets/user_page/home/formUser.svg'
import Date from '../../../../../../assets/user_page/home/formDate.svg'
import Salary from '../../../../../../assets/user_page/home/formSalary.svg'
import validation from './validation/validationSchema.js'

import ModalBase from '../../../../../../components/ModalBase/ModalBase';
import { ModalContext } from '../../../../../../context/ModalContext.jsx';
import { Formik, Form } from 'formik';

import Button from '../../../../../../components/UI/Button/Button.jsx';
import Input from '../../../../../../components/UI/Input/Input.jsx';

const ModalCareerGoal = () => {

    const initialStateCarer = {
        title: '',
        date: '',
        salary: ''
    }

    const { fnShowModalCareerGoal } = useContext(ModalContext)

    return (

        <ModalBase
            onClose={() => { fnShowModalCareerGoal() }}
            classModal={style.modalCareer}
            classModalContent={style.modalCareerContent}
        >
            <h1 className={style.modalCareerTitle}>Your next career goal</h1>
            <p className={style.modalCareerText}>Create your goal in searching for a job and confidently go to it with us</p>
            <Formik
                initialValues={initialStateCarer}
                validationSchema={validation}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    fnShowModalCareerGoal()
                    resetForm()
                }}

            >
                {({ values, errors, touched, isValid, isSubmitting, dirty }) => (
                    <Form>
                        <Input
                            id='title'
                            name="title"
                            img={User}
                            placeholder="Target Title"
                            error={errors}
                            values={values}
                            touched={touched}
                        />
                        <Input
                            id='date'
                            name="date"
                            img={Date}
                            placeholder="Target Date"
                            error={errors}
                            values={values}
                            touched={touched}
                        />
                        <Input
                            type='number'
                            id='salary'
                            name="salary"
                            img={Salary}
                            placeholder="Target Salary Rage"
                            error={errors}
                            values={values}
                            touched={touched}
                        />
                        <Button
                            type='submit'
                            className={style.modalCareerSubmit}
                            disabled={!(isValid && dirty) || isSubmitting}
                        >Save</Button>
                    </Form>
                )
                }
            </Formik>
            <button
                className={style.modalCareerClose}
                type='button'
                onClick={() => { fnShowModalCareerGoal() }}
            >
                <Close />
            </button>
        </ModalBase>

    );
};

ModalCareerGoal.propTypes = {};

export default ModalCareerGoal;