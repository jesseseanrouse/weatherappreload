import React, {useState} from 'react';

const Form = (props) => {
    const [zip, setZip] = useState('')
    const [view, setView] = useState(false)
	const handleCheck = (e) => {
        e.preventDefault();
        if (zip.length === 5) {
            setView(false)
            props.setValue(zip)
            props.func(zip)
        } else {
            setView(true)
        }
    };
    const handleChange = (e) => {
        const zipEnter = e.target.value
        setZip(zipEnter)
    }
	return (
		<>
			<form onSubmit={handleCheck}>
				<input
					type='text'
					// Looked this up, wasn't what I was going for but it has an effect that I'm comfortable. I wanted to prevent non-number text from being inputted but I saw the code required for that and this simply blocks the submit so it works for me.
					pattern='[0-9]*'
					placeholder='Enter Zip Code'
					value={zip}
					onChange={handleChange}></input>
				<input type='submit' />
				<p style={{ display: view ? 'block' : 'none' }}>Please enter a valid Zip Code with 5 digits</p>
			</form>
		</>
	);
};

export default Form;
