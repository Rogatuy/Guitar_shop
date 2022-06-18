import './server-error-message.css';

export default function ServerErorMessage(): JSX.Element {
  return (
    <div className="server-error-message-container">
      <div className="server-error-message">Something went wrong! Try reloading the page!</div>
    </div>
  );
}
