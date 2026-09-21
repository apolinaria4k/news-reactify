import classes from './styles.module.css';
import BannersList from '../BannersList/BannersList';

export default function LatestNews({ banners, isLoading }) {
  return (
    <section className={classes.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
}
