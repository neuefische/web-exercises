import "./D6.css";

export default function D6({ value }) {
  return (
    <div className={`d6 d6--${value}`} title={value}>
      <div className="d6__face d6__face--1" />
      <div className="d6__face d6__face--2" />
      <div className="d6__face d6__face--3" />
      <div className="d6__face d6__face--4" />
      <div className="d6__face d6__face--5" />
      <div className="d6__face d6__face--6" />
    </div>
  );
}
