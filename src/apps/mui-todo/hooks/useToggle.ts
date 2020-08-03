import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function (initVal = false) {
	const [state, setState] = useState(initVal);
	const toggle = (): void => {
		setState(!state);
	};
	return [state, toggle] as const;
}
