import SearchIcon from "@atoms/SearchIcon";
import styles from "./styles.module.scss";

import { useState } from "react";

export default function Input({ placeholder, page }) {
  const [search, setSearch] = useState("");

  return (
    <>
    {page === 'FavoriteAnimals' ? 
       <form className={styles.inputContainerFavoriteAnimal}>
       <SearchIcon />
       <input
         className={styles.inputContainer__box}
         type="search"
         aria-label={placeholder}
         placeholder={placeholder}
         value={search}
         onChange={(e) => setSearch(e.target.value)}
       />
     </form> : <form className={styles.inputContainer}>
       <SearchIcon />
       <input
         className={styles.inputContainer__box}
         type="search"
         aria-label={placeholder}
         placeholder={placeholder}
         value={search}
         onChange={(e) => setSearch(e.target.value)}
       />
     </form>
    }
    </>
   
  );
}
