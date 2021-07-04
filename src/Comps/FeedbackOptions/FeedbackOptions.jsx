export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return Object.keys(options).map((el) => (
    <button key={el} type="button" onClick={() => onLeaveFeedback(el)}>
      {el[0].toUpperCase() + el.slice(1)}
    </button>
  ));
}
