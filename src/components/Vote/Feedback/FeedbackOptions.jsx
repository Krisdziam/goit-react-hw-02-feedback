import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'


const FeedbackOptions = ({onLeaveFeedback})  => {
  return (
    <>
   
      <button className={styles.feedbackBtn} type="button" onClick={() => onLeaveFeedback("good")}>Good</button>
      <button className={styles.feedbackBtn} type="button" onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button className={styles.feedbackBtn} type="button" onClick={() => onLeaveFeedback("bad")}>Bad</button>
    </>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  leaveVote: PropTypes.func,
  options: PropTypes.array,
};
