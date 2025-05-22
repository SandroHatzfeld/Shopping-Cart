export default function priceRendering(value = Number) {
	const currency = '€'

	const stringValue = value.toFixed(2).toString().replace('.', ',')
	return stringValue.concat(' ', currency)

}