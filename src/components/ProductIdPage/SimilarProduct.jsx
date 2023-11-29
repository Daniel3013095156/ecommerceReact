import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import ProductCard from "../HomePage/ProductCard"

const SimilarProduct = ({ categoryId,idProd }) => {

    const  [ productsByCatergory, getProductsByCategory] = useFetch()
    
    useEffect(()=> {
        if (categoryId){
        const url=`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId }`
        getProductsByCategory(url)
        }
    },[categoryId ])

    console.log(productsByCatergory)

    return (

        <article>
            <h2>Similar Product</h2>
            <div>
                {
                    productsByCatergory?.filter((prod) => prod.id !== idProd).map(( product) => (
                        <ProductCard 
                        key={product.id}
                        product={product}
                        />
                    ))}
            </div>
        </article>

    ) 
}
export default SimilarProduct   