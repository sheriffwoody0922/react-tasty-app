import { useState, useEffect, useContext } from 'react'
import { CategoryFilterContext } from '../context/Context'
import './CategoryBtnSection.css'

const CategoryBtnSection = () => {
    const [categories, setCategories] = useState([])
    const {categoryFilter, setCategoryFilter} = useContext(CategoryFilterContext)

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
        .then((res) => res.json())
        .then((data) => setCategories(data.meals))
        .catch((err) => console.log(`Fehler: ${err}`))
    },[])

    return ( 
        <section className='category-btn-sec'>
            {categories ? (
                categories.map((category, index) => {return <button className={categoryFilter == category.strCategory ? "active" : ""}  onClick={() => setCategoryFilter(category.strCategory)} key={index}>{category.strCategory}</button>})
            ) : (
                <p>loading data...</p>
            )}
        </section>
     );
}

export default CategoryBtnSection;