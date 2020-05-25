import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <div>
      <h1>
        <Link to={routes.home()}>Redwood Blog</Link>
      </h1>
      <h1>AboutPage</h1>
      <p>Find me in ./web/src/pages/AboutPage/AboutPage.js</p>
    </div>
  )
}

export default AboutPage
