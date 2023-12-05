import Image from 'next/image'
import './error/Error.css'
import ErrorImage from './assets/undraw_stars_re_6je7.svg'

const notfound = () => {
  return (
    <div className="content">
    <div className="main_content">
      <h1>Error 404</h1>
    <h2>Ups. La página que buscás no se encuentra por aquí.</h2>
    <Image src={ErrorImage} width='150' height='150' className='error-img' alt="Imagen de Error"/>

    </div>
    </div>
  )
}

export default notfound