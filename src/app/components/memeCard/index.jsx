import InterectionBar from '../interectionbar';
import styles from './memeCard.module.css';

const MemeCard = ({ meme }) => {
    return (
      // COMPONENTE: MemeCard
      <div key={meme.id} className={styles.memeCard}>
      <div className={styles.memeCardHeader}>
        <div className={styles.memeAuthor}>
          <img src={meme.authorAvatar} alt={meme.author} />
          <span>{meme.author}</span>
        </div>
        <span className={styles.memeCategory}>{meme.category}</span>
      </div>
      <img
        src={meme.image}
        alt={meme.title}
        className={styles.memeImage}
      />
      <div className={styles.memeContent}>
        <h3 className={styles.memeTitle}>{meme.title}</h3>
        <p className={styles.memeDescription}>{meme.description}</p>
        <InterectionBar meme= {meme}/>
      </div>
    </div>
    // FIM COMPONENTE: MemeCard
    );
    }

export default MemeCard;