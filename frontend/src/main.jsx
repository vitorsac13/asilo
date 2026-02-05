import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home/page.jsx'
import Auth from './pages/auth/page.jsx'
import Profile from './pages/profile/page.jsx'
import About from './pages/about/page.jsx'
import Contact from './pages/contact/page.jsx'
import Health from './pages/health/page.jsx'
import Admin from './pages/admin/page.jsx'
import Post from './pages/post/page.jsx'

const pages = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/auth', element: <Auth /> },
			{ path: '/profile', element: <Profile /> },
			{ path: '/about', element: <About /> },
			{ path: '/contact', element: <Contact /> },
			{ path: '/health', element: <Health /> },
			{ path: '/admin', element: <Admin /> },
			{ path: '/post', element: <Post /> },
		]
	}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={pages}></RouterProvider>
  </StrictMode>,
)
