import classes from "./styles.module.css";
import NewsBanner from "../../components/newsBanner/NewsBanner";
import { useEffect, useState } from "react";
import { getNews } from "../../API/apiNews";
import NewsList from "../../components/newsList/NewsList";

export default function Main() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
        console.log(response.news);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={classes.main}>
      {news.length > 0 ? <NewsBanner item={news[4]}></NewsBanner> : null}
      <NewsList news={news}></NewsList>
    </main>
  );
}
