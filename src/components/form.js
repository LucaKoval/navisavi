import React from "react"
import * as Yup from "yup"
import { Formik } from "formik"

import styles from "../styles/Hero.module.css"

const signInValidationSchema = Yup.object().shape({
 	betaEmail: Yup.string()
    	.label("Email")
    	.email("Please enter a valid email")
    	.required("Please enter an email")
});

const Form = () => (
	<Formik
        initialValues={{ betaEmail: '', betaFirstName: '', betaLastName: '' }}
        validationSchema={signInValidationSchema}
    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            dirty,
            isValid
        }) => (
			<form
			    name="beta-signup"
			    method="POST"
			    data-netlify="true"
			    className={styles.form}
			    action="/"
			> 
			    <div className={styles.inputContainer}>
			        <div className={styles.inputField}>
			            <input
			                id="betaEmail"
			                type="email"
			                name="betaEmail"
			                onChange={handleChange}
				            onBlur={handleBlur}
							value={values.betaEmail}
			                placeholder="Email (required)"
			                aria-required="true"
			            />
			            <label htmlFor="betaEmail">Email (required)</label>
			        </div>
			        { (errors.betaEmail && touched.betaEmail) &&
			        	<div className={styles.error} style={ (errors.betaEmail && touched.betaEmail) ? {} : { display: 'none' }}>
			        		{errors.betaEmail}
			        	</div>
			        }
			        <div className={styles.nameInputContainer}>
			            <div className={styles.inputField}>
			                <input
			                    id="betaFirstName"
			                    type="text"
			                    name="betaFirstName"
			                    onChange={handleChange}
				            	onBlur={handleBlur}
								value={values.betaFirstName}
			                    placeholder="First Name (optional)"
			                    aria-required="false"
			                />
			                <label htmlFor="betaFirstName">First Name (optional)</label>
			            </div>
			            <div className={styles.spacer}/>
			            <div className={styles.inputField}>
			                <input
			                    id="betaLastName"
			                    type="text"
			                    name="betaLastName"
			                    onChange={handleChange}
				            	onBlur={handleBlur}
								value={values.betaLastName}
			                    placeholder="Last Name (optional)"
			                    aria-required="false"
			                />
			                <label htmlFor="betaLastName">Last Name (optional)</label>
			            </div>
			        </div>
			    </div>
			    <input type="hidden" name="form-name" value="beta-signup" />
			    <div className={styles.buttonContainer}>
			    	{ !(isValid && dirty) && <div className={styles.buttonDisabled} /> }
			        <div className={styles.buttonShadow} />
			        <input type="submit" value="Join" disabled={!(isValid && dirty)} />
			    </div>
			</form>
		)}
	</Formik>
)

export default Form