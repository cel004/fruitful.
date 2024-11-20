import styles from './PersonIcon.module.css';
import { Person } from '../icons/iconPerson.jsx';
import { Link } from 'react-router-dom';

function PersonIcon(){
    return(
        
            <div className={styles.icon}><Link to="/personal"><Person /></Link></div>
   
    
    )
}

export default PersonIcon;