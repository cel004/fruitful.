import styles from './Create.module.css';
import { Plus } from '../icons/iconPlus.jsx';

function Create() {
    return (
        <div className={styles.createButton}>
            <div className={styles.plusIcon}>
                <Plus />
            </div>
        </div>
    );
}

export default Create;
