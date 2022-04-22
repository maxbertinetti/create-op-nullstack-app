import Nullstack from 'nullstack'
import './Application.scss'
import Home from './Home'
import About from './About'

class Application extends Nullstack {
  prepare({ page }) {
    page.locale = '{{PROJECT_LANG}}'
  }

  render() {
    return (
      <main>
        <Home route="/" />
        <About route="/about-me" />
      </main>
    )
  }
}

export default Application