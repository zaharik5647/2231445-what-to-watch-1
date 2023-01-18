import Header from '../../components/header/header';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';

export default function MyListPage() {
  return (
    <div className='user-page'>
      <Header />
      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        <div className='catalog__films-list'>
          <FilmCard
            imageUrl={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}
            name={'Fantastic Beasts: The Crimes of Grindelwald'}
          />

          <FilmCard
            imageUrl={'img/bohemian-rhapsody.jpg'}
            name={'Bohemian Rhapsody'}
          />

          <FilmCard
            imageUrl={'img/macbeth.jpg'}
            name={'Macbeth'}
          />

          <FilmCard
            imageUrl={'img/aviator.jpg'}
            name={'Aviator'}
          />

          <FilmCard
            imageUrl={'img/we-need-to-talk-about-kevin.jpg'}
            name={'We need to talk about Kevin'}
          />

          <FilmCard
            imageUrl={'img/what-we-do-in-the-shadows.jpg'}
            name={'What We Do in the Shadows'}
          />

          <FilmCard
            imageUrl={'img/revenant.jpg'}
            name={'Revenant'}
          />

          <FilmCard
            imageUrl={'img/johnny-english.jpg'}
            name={'Johnny English'}
          />

          <FilmCard
            imageUrl={'img/shutter-island.jpg'}
            name={'Shutter Island'}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
