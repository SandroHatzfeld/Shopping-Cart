import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"

export default function CategoryListItem({ level, name, subcategories }) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const curCategory = useParams()
  
  useEffect(() => {
    if(curCategory.category === name) {
      setIsCollapsed(false)
    }
  }, [name,curCategory])

  const handleToggleList = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div
      className={`category-item category-level-${level} ${
        isCollapsed && "collapsed"
      }`}
    >
      <div className="category-title">
        <NavLink
          to={name}
          state={{isActive: true}}
        >
          {name}
        </NavLink>
        {subcategories && (
          <button onClick={handleToggleList} className="toggleListing"></button>
        )}
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
