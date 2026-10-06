import { formatDate } from "../../helpers/formatDate"
import classes from './styles.module.css'

export default function Header(){
    return(
         <header className={classes.header}>
           <h1 className={classes.title}>NEWS REACTIFY</h1>
           <p className={classes.date}>{formatDate(new Date())}</p>
         </header>
    )

}