import '../styles/Loader.css';

export default function Loader({ text = "LOADING" }) {
  return (
    <div className="loader-wrap">
      <div className="loader">


        <div className="loader__ring loader__ring--outer" />

        <div className="loader__ring loader__ring--mid" />

        <div className="loader__core">
          <div className="loader__core-inner" />
        </div>

        <div className="loader__bracket loader__bracket--tl" />
        <div className="loader__bracket loader__bracket--tr" />
        <div className="loader__bracket loader__bracket--bl" />
        <div className="loader__bracket loader__bracket--br" />

        <div className="loader__scan" />
      </div>

      <div className="loader__text">
        <span>{text}</span>
        <span className="loader__dots">
          <span className="loader__dot" />
          <span className="loader__dot" />
          <span className="loader__dot" />
        </span>
      </div>

      <div className="loader__bar-track">
        <div className="loader__bar-fill" />
      </div>
    </div>
  );
}