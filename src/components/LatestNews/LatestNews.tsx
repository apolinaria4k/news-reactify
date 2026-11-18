import BannersList from '../BannersList/BannersList';
import { useGetLatestNewsQuery } from '../store/services/newsApi';
import classes from './styles.module.css';

export default function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  return (
    <section className={classes.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}
