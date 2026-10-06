import classes from './styles.module.css';
import NewsItem from '../NewsItem/NewsItem';
import withSkeleton from '../../helpers/hocs/withSkeleton';
import type { INews } from '../../interfaces';

interface Props {
  news?: INews[];
}

function NewsList({ news }: Props) {
  return (
    <ul className={classes.list}>
      {news?.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);
export default NewsListWithSkeleton;
