import classes from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";

export default function NewsList({ news }) {
  return (
    <ul className={classes.list}>
      {news.map(item => <NewsItem key={item.id} item={item}/>)}
      
    </ul>
  );
}
