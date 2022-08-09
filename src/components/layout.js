import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Link to="/" className="header--logo">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" className="svg_logo" preserveAspectRatio="none" viewBox="0 0 205.71 90">
            <title>미디어나비 로고</title>
            <path className="svg_logo_path" d="M202.22,0H176.37a9,9,0,0,0-7.52,5.12l-19,43.4-19-43.4A9,9,0,0,0,123.35,0H97.4a9,9,0,0,0-7.52,5.12L79.15,29.64,75.29,5.12A6.32,6.32,0,0,0,69.2,0H42.88a9,9,0,0,0-7.52,5.12L.46,84.88C-.78,87.71.58,90,3.5,90H29.34a9,9,0,0,0,7.52-5.12L47.59,60.36l3.86,24.52A6.33,6.33,0,0,0,57.54,90H83.86a9,9,0,0,0,7.53-5.12l19-43.4,19,43.4A9,9,0,0,0,136.89,90h25.94a9,9,0,0,0,7.52-5.12L205.26,5.12C206.49,2.29,205.13,0,202.22,0ZM51.51,51.4,70.44,8.16,75.23,38.6,56.31,81.84Zm61.73-16.46L125.66,6.56a2.8,2.8,0,0,1,.36.56l21,47.94L134.58,83.44a2.42,2.42,0,0,1-.36-.56Z" />
          </svg>
          <span className="header--logo--text">MediaNavi Blog</span>
        </Link>
      </header>
      <main>{children}</main>
      <footer>
        <p className="copyright">© MediaNavi</p>
      </footer>
    </div>
  )
}

export default Layout
