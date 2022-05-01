const MyAnswer = () => {
const [currentAnswer, setcurrentAnswer] = useState('42');

return (
<div>
<input
type="text"
value={currentAnswer}
placeholder="Press 0"
onChange={e => setcurrentAnswer(37)}
/>
</div>
);
};

ReactDOM.render(<MyAnswer />, document.getElementById("root"));

