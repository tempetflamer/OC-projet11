import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

function Error404() {
  return (
    <Layout className="error">
      <div className="error__content">
        <p className="error__content__number">404</p>
        <p className="error__content__text">Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </Layout>
  )
}

export default Error404
