import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const FilterCategory = ({ setCategorySelect }) => {

    const [categories, getCategories] = useFetch()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
        getCategories(url)
    },[])

    const handleCategory = id => {
        setCategorySelect(id)
    }

    return (
        <section>
            <h3>Categories</h3>
            <hr />
            <ul>
                <li onClick={() => handleCategory('all')}>All Categories</li>
                {categories?.map(category => (
                    <li onClick={() => handleCategory(category.id)} key={category.id}>{category.name}</li>
                ))}
            </ul>
        </section>
    )
}
export default FilterCategory 