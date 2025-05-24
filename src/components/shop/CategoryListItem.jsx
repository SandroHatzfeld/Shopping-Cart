import { NavLink } from 'react-router-dom'

export default function CategoryListItem({ name, categories }) {
  return (
    <div className="category-item">
      <NavLink to={categories.name}>{name}</NavLink>
      <button className="toggleListing"></button>
      {categories.subcategories ? (
        categories.subcategories.map((category) => {
          return (
            <CategoryListItem
              name={category.name}
              categories={category.subcategories}
            />
          )
        })
      ) : (
        <> </>
      )}
    </div>
  )
}
