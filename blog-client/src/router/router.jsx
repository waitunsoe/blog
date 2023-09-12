import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/Home.jsx";
import BlogDetail from "../pages/BlogDetail";
import BlogCreate from "../pages/BlogCreate";
import RichTextEditor from "../components/RichTextEditor";
import BlogEdit from "../pages/BlogEdit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:slug",
        element: <BlogDetail />,
      },
      {
        path: "/blog-create",
        element: <BlogCreate />,
      },
      {
        path: "/blog-edit/:slug",
        element: <BlogEdit />,
      },
      {
        path: "/rich-text-area",
        element: <RichTextEditor />,
      },
    ],
  },
]);
