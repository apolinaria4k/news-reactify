import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';
import classes from './styles.module.css';

export default function Main() {
  return (
    <main className={classes.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
}
