import classes from './styles.module.css';
import NewsBanner from '../../components/newsBanner/NewsBanner';
import { useEffect, useState } from 'react';
import { getNews } from '../../API/apiNews';
import NewsList from '../../components/newsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';

export default function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={classes.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[4]}></NewsBanner>
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}
      {!isLoading ? <NewsList news={news}></NewsList> : <Skeleton type={'item'} count={10} />}
    </main>
  );
}
