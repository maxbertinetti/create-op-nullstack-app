
  
import Nullstack from 'nullstack'
import './Home.scss'

class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - {{i18n_welcome}}`;
    page.description = `${project.name} {{i18n_madeWith}}`;
  }

  render() {
    return (
      <section class="section">
        <div class="container">
          <h1 class="title">Home</h1>
           <p class="subtitle">
            A link to the
            <a href="/about-me"> About me page</a>
          </p>
        </div>
      </section>
    )
  }
}

export default Home