import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { App } from './App.tsx'
import { DashboardPage } from './router/Dashboard.tsx'
import { NewsletterSearchPage } from './router/NewsletterSearch.tsx'
import { NewsletterNewPage } from './router/NewsletterNew.tsx'
import { NewsletterEditPage } from './router/NewsletterEdit.tsx'
import { ErrorPage } from './router/Error.tsx'
import { Error404Page } from './router/Error404.tsx'
import { LoginPage } from './router/Login.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      }, {
        path: '/dashboard',
        element: <DashboardPage />
      }, {
        path: '/newsletters/search',
        element: <NewsletterSearchPage />
      }, {
        path: '/newsletters/new',
        element: <NewsletterNewPage />
      }, {
        path: '/newsletters/:code/edit',
        element: <NewsletterEditPage />
      }
    ]
  }, {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  }, {
    path: '*',
    element: <Error404Page />,
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
