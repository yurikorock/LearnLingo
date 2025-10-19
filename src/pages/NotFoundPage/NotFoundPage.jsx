import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h3>Page is not found</h3>
      <Link to="/">Go to home page</Link>
    </>
  );
}
