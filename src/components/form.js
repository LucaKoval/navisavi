import React, { useState } from "react"
import * as Yup from "yup"
import { Formik } from "formik"

import styles from "../styles/Hero.module.css"

const signInValidationSchema = Yup.object().shape({
  ['beta-email']: Yup.string()
    .label("Email")
    .email("Please enter a valid email")
    .required("Please enter an email")
});

const Form = () => {
	const [displayError, setDisplayError] = useState(false)

	const handleSubmit = (event, values, touched, setFieldError) => {
		console.log('asdlkfj')
		// let emailError = true
		// if (errors) {
		// 	emailError = errors['beta-email']
		// }
		// if (!touched['beta-email'] || emailError) event.preventDefault()


		let emailVal = values['beta-email']
		let emailError = true
		// if (emailVal) {
			signInValidationSchema.isValid(emailVal).then((isValid) => {
				if (!isValid) setFieldError('beta-email', '')
				emailError = !isValid
				console.log(emailError)
			})
		// } else {
		// 	emailError = true
		// }

		if (!touched['beta-email'] || emailError) event.preventDefault()
	}

	return (
		<Formik
	        initialValues={{ ['beta-email']: '', ['beta-first-name']: '', ['beta-last-name']: '' }}
	        validationSchema={signInValidationSchema}
	    >
	        {({
	            values,
	            errors,
	            touched,
	            handleChange,
	            handleBlur,
	            submitForm,
	            setFieldError
	        }) => (
				<form
				    name="beta-signup"
				    method="POST"
				    data-netlify="true"
				    className={styles.form}
				    action="/"
				    onSubmit={(e) => handleSubmit(e, values, touched, setFieldError)}
				    onKeyDown={(e) => {
                		if (e.key === 'Enter') {
                  			handleSubmit(e, values, touched, setFieldError)
                		}
              		}}
				> 
				    <div className={styles.inputContainer}>
				        <div className={styles.inputField}>
				            <input
				                id="beta-email"
				                type="email"
				                name="beta-email"
				                onChange={handleChange}
					            onBlur={handleBlur}
								value={values['beta-email']}
				                placeholder="Email (required)"
				                aria-required="true"
				            />
				            <label for="beta-email">Email (required)</label>
				        </div>
				        { (errors['beta-email'] && touched['beta-email']) &&
				        	<div className={styles.error} style={ (errors['beta-email'] && touched['beta-email']) ? {} : { display: 'none' }}>
				        		{errors['beta-email']}
				        	</div>
				        }
				        <div className={styles.nameInputContainer}>
				            <div className={styles.inputField}>
				                <input
				                    id="beta-first-name"
				                    type="text"
				                    name="beta-first-name"
				                    onChange={handleChange}
					            	onBlur={handleBlur}
									value={values['beta-first-name']}
				                    placeholder="First Name (optional)"
				                    aria-required="false"
				                />
				                <label for="beta-first-name">First Name (optional)</label>
				            </div>
				            <div className={styles.spacer}/>
				            <div class={styles.inputField}>
				                <input
				                    id="beta-last-name"
				                    type="text"
				                    name="beta-last-name"
				                    onChange={handleChange}
					            	onBlur={handleBlur}
									value={values['beta-last-name']}
				                    placeholder="Last Name (optional)"
				                    aria-required="false"
				                />
				                <label for="beta-last-name">Last Name (optional)</label>
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