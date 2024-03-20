import { useEffect, useState } from "react";

export const useDetectAdBlock = () => {
	const [adBlockDetected, setAdBlockDetected] = useState(false);
	const url = window.location.href;

	useEffect(() => {
		fetch(`${url}adhelper.js`, {
			method: "HEAD",
			mode: "no-cors",
			cache: "no-store",
		})
			.then(({ redirected }) => {
				if (redirected) setAdBlockDetected(true);
			})
			.catch(() => {
				setAdBlockDetected(true);
			});
	}, []);

	return adBlockDetected;
};
