import propTypes from 'prop-types';

export const ButtonOptions = ({onLeaveFeedback}) => {
        return (
            <div>
                <button onClick={evt => {
          onLeaveFeedback(evt.target.value);
        }}
                value="good">
                    Good</button>
                <button onClick={evt => {
          onLeaveFeedback(evt.target.value);
        }} value="neutral">
            Neutral</button>
                <button onClick={evt => {
          onLeaveFeedback(evt.target.value);
        }} value="bad">
        Bad</button>
            </div>

        )
    }

  ButtonOptions.propTypes = {
        good: propTypes.number,
        bad: propTypes.number,
        neutral: propTypes.number,
        total: propTypes.number,
        positivePercentage: propTypes.number,
      };