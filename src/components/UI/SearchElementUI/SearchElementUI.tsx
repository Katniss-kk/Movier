import style from './SearchElement.module.css'
import { SearchSVG } from './SearchConstant'

export default function SearchElementUI() {
    return(
        <div className={style.searchContainer}>
            <SearchSVG className={style.searchIcon}/>
            <input type="text" placeholder='Search' className={style.input}/>
        </div>
    )
}