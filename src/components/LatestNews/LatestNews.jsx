import classes from './styles.module.css';
import BannersList from '../BannersList/BannersList';
import { useFetch } from '../../helpers/hooks/useFetch';
import { getLatestNews } from '../../API/apiNews';

export default function LatestNews() {
  const { data, isLoading } = useFetch(getLatestNews);
  return (
    <section className={classes.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}
