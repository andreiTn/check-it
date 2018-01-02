import React from 'react';
import './input.css';
import { Field } from 'redux-form';

function renderField(field) {
	const { meta: { touched, error} } = field;
	const containerClass = `row ${ field.containerClass ? field.containerClass : "" }`

	let hasError = touched && error;
	let fieldLabel = field.label;

	if (hasError) {
		fieldLabel = error;
	}

	return (
		<div className={ containerClass }>
			<fieldset className="input-field col s12">
				<input
					{ ...field.input }
					id={field.input.name}
					type={field.type}
					onBlur={ bindBlur.bind(null, field.input.name) }
					onFocus={ bindFocus.bind(null, field.input.name) }
				/>
				<label htmlFor={field.input.name}>{ fieldLabel }</label>
			</fieldset>
		</div>
	);
}

function bindFocus(id) {
	let field = document.getElementById(id);
	let label = field.nextElementSibling;

	if (!label) {
		return false;
	}

	label.classList.add("active");
}
function bindBlur(id) {
	let field = document.getElementById(id);
	if (!field) return false;
	
	let label = field.nextElementSibling;
	if (!label) return false;
	
	if (field.value === "") {
		label.classList.remove("active");
	}
}

/**
 * Input
 * 
 * @param Object {id: string, label: string} 
 * @returns Field
 */
const Input = function (props) {
	return <Field { ...props } component={renderField} />
};

export default Input;