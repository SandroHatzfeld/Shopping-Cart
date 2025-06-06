import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import routes from './routes/routes.jsx'
import './styles/main.scss'
import './styles/home.scss'
import './styles/shop.scss'
import './styles/cart.scss'
import './styles/pdp.scss'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
