import React, {useState} from 'react'
import styles from './styles.module.css';

const NavBar = () => {
 const [isMobile,setIsmobile] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h3 className={styles.logo}>SEU LOGO</h3>
      <ul  className={isMobile ? styles.navlinksmobile : styles.navlinks}>
        <li className={styles.links}>Home</li>
        <li className={styles.links}>Portfolio</li>
        <li className={styles.links}>Serviços</li>
        <li className={styles.links}>Contato</li>
      </ul>
      <button className={styles.mobilemenuicon}onClick={()=>setIsmobile(!isMobile)}>
        {isMobile ? <p>x</p>:<p>H</p>}
      </button>
    </nav>
  )
}

export default NavBar