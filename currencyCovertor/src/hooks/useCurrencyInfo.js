import { useEffect, useState } from "react"

export default function useCurrencyInfo(currency) {
	const [data, setData] = useState({});
	useEffect(() => {
		fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
		.then((response) => response.json())
		.then((res) => setData(res[currency]))
		.catch((err) => err)
	}, [currency])

	return data;
}