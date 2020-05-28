export const formatDate = (dateInText: string) => {
	const date = new Date(dateInText)
	const dateTimeFormat = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	})
	const [
		{ value: month },
		,
		{ value: day },
		,
		{ value: year },
	] = dateTimeFormat.formatToParts(date)

	return `${month} ${day}, ${year}`
}

export const yearsPassed = (dateInText: string) => {
	const date = new Date(dateInText).getTime()
	const now = new Date().getTime()
	const diff = now - date
	const yearInMilli = 1000 * 60 * 60 * 24 * 365
	const years = diff / yearInMilli
	return years.toFixed(0)
}
