import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className="error">
      <div className="error__content">
        <p className="error__content__number">404</p>
        <p className="error__content__text">Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error404
