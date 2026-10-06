import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import type { INews } from '../../interfaces';
import classes from './styles.module.css';

interface Props {
  item: INews;
}

export default function NewsItem({ item }: Props) {
  return (
    <li className={classes.item}>
      <div className={classes.wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>
      <div className={classes.info}>
        <h3 className={classes.title}>{item.title}</h3>
        <p className={classes.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
}
