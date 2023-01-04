import "./sent.styles.scss";

const Sent = ({ handleClick }) => {
  return (
    <div className="sent">
      <h2>Thank you for reaching out! 👌</h2>
      <p>I will get back to you as soon as possible.</p>

      <div onClick={handleClick} className="button">Send New Message</div>
    </div>
  )
}

export default Sent
