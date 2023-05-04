import { Link } from "react-router-dom";

export default function NavBar({ user, setUser }) {
  return (
    <nav>
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <span>Welcome {user.name}</span>
    </nav>
  );
}
