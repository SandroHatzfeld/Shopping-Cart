import { useLoaderData } from 'react-router-dom'

export default function ProductDetailPage() {
	const productData = useLoaderData()

	return <p><br/><br/><br/>{productData.title}</p>
}