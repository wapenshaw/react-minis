import { useState, ChangeEvent } from 'react';

export default function (inputVal: string) {
	const [value, setValue] = useState(inputVal);
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		setValue(e.target.value);
	};
	const reset = (): void => {
		setValue('');
	};
	return [value, handleChange, reset] as const;
}
