import withSkeleton from '../../helpers/hocs/withSkeleton';
import classes from './styles.module.css';
import NewsBanner from '../newsBanner/NewsBanner';

function BannersList({ banners }) {
  return (
    <ul className={classes.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner}></NewsBanner>
      ))}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');
export default BannersListWithSkeleton;
