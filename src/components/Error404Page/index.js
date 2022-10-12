import { Link } from 'react-router-dom';
import './style.scss';
import img404 from 'src/assets/images/page_404.jpg';

function Error404() {
  return (
    <main>
      <section className="main-error">
        <img className="img404" src={img404} alt="background 404" />
        <div className="main-error-404-glow">
          <p>Oops it's a 404 !</p>
          <p>Go back to <Link to="/" className="underline">home page.</Link></p>
        </div>
      </section>
    </main>
  );
}

export default Error404;
