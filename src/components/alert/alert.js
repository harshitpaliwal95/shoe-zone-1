export const Alert = ({ text }) => {
  return (
    <div className="alert alert-secondary">
      <i className="bi bi-chevron-double-right"></i>{" "}
      <i className="bi bi-chevron-double-right"></i>
      <strong> {text}</strong>
    </div>
  );
};
