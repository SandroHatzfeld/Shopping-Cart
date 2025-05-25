import { NavLink } from "react-router-dom"

export default function CategoryListItem({ level, name, subcategories }) {
  
  return (
    <div className={`category-item category-level-${level}`}>
      <div className="category-title">
        <NavLink to={name}>{name}</NavLink>
        <button className="toggleListing"></button>
      </div>
      {subcategories ? (
        subcategories.map((category) => {
          return (
            <CategoryListItem
              level={level + 1}
              key={category.name}
              name={category.name}
              subcategories={category.subcategories}
            />
          )
        })
      ) : (
        <> </>
      )}
    </div>
  )
}
