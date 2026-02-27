import { Link } from "react-router";

const PrimaryButton = ({
  text,
  isLink = false,
  route = "/",
  type = "button",
}) => {
  if (isLink) {
    return (
      <Link to={route} className="btn-primary">
        {text}
      </Link>
    );
  }
  return (
    <button type={type} className="btn-primary">
      {text}
    </button>
  );
};

export default PrimaryButton;
