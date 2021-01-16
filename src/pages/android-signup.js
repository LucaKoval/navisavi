import React from "react"
import * as Yup from "yup"
import { Formik } from "formik"

import signupStyles from "../styles/Signup.module.css"
import styles from "../styles/Hero.module.css"

const signInValidationSchema = Yup.object().shape({
 	betaEmail: Yup.string()
    	.label("Email")
    	.email("Please enter a valid email")
    	.required("Please enter an email")
});

const AndroidSignup = () => {
    return (
    	<div className={signupStyles.container}>
    		<div className={signupStyles.formContainer}>
    			<div className={signupStyles.title}>Get the app early!</div>
    			<Formik
    			    initialValues={{ betaEmail: '' }}
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
						    name="beta-signup-android"
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
						    </div>
						    <input type="hidden" name="form-name" value="beta-signup-android" />
						    <div className={styles.buttonContainer}>
						    	{ !(isValid && dirty) && <div className={styles.buttonDisabled} /> }
						        <div className={styles.buttonShadow} />
						        <input type="submit" value="Sign Up" disabled={!(isValid && dirty)} />
						    </div>
						</form>
					)}
				</Formik>
    		</div>
    	</div>
    )
}

export default AndroidSignup