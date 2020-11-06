import React, { useState } from "react"
import * as Yup from "yup"
import { Formik } from "formik"

import styles from "../styles/Hero.module.css"

const signInValidationSchema = Yup.object().shape({
 	betaEmail: Yup.string()
    	.label("Email")
    	.email("Please enter a valid email")
    	.required("Please enter an email")
});

const Form = () => {
	const [displayError, setDisplayError] = useState(false)

	return (
		<Formik
	        initialValues={{ betaEmail: '', betaFirstName: '', betaLastName: '' }}
	        validationSchema={signInValidationSchema}
	    >
	        {({
	            values,
	            errors,
	            touched,
	            handleChange,
	            handleBlur
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
				            <label for="betaEmail">Email (required)</label>
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
				                    name="betabetaFirstName"
				                    onChange={handleChange}
					            	onBlur={handleBlur}
									value={values.betaFirstName}
				                    placeholder="First Name (optional)"
				                    aria-required="false"
				                />
				                <label for="betaFirstName">First Name (optional)</label>
				            </div>
				            <div className={styles.spacer}/>
				            <div class={styles.inputField}>
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
				                <label for="betaLastName">Last Name (optional)</label>
				            </div>
				        </div>
				    </div>
				    <input type="hidden" name="form-name" value="beta-signup" />
				    <div className={styles.buttonContainer}>
				        <div className={styles.buttonShadow} />
				        <input type="submit" value="Join"/>
				    </div>
				</form>
			)}
		</Formik>
	)
}

export default Form