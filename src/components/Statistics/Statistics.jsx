import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <>
     <h2 className={styles.commonTitle}>TASK 2</h2>
      <section className={styles.statistics}>
        <div className={styles.statCard}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
          {stats.map(props => (
            <li className={styles.item} key={props.id} style={{backgroundColor: getRandomHexColor()}}>
              <span className={styles.label}>{props.label}</span><br />
              <span className={styles.percentage}>{props.percentage}%</span>
            </li>
          ))}
        </ul>
        </div>
      </section>
    </>
  );
};


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }))
}.isRequired;
