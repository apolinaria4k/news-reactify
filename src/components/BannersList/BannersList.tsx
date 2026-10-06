import withSkeleton from '../../helpers/hocs/withSkeleton';
import classes from './styles.module.css';
import NewsBanner from '../newsBanner/NewsBanner';
import type { INews } from '../../interfaces';

interface Props {
  banners?: INews[] | null;
}

function BannersList({ banners }: Props) {
  return (
    <ul className={classes.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner}></NewsBanner>
      ))}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 10, 'row');
export default BannersListWithSkeleton;
