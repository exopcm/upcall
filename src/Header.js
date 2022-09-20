// import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
// import { FiSettings } from "react-icons/fi";
// import { GiArtificialIntelligence } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout, reset } from "../features/auth/authSlice";

function Header(props) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  // const onLogout = () => {
  //   dispatch(logout());
  //   dispatch(reset());
  //   navigate("/");
  // };
  const onListFiles = () => {
    navigate("/c1");
  };
  const onListGCFiles = () => {
    navigate("/c2");
  };
  const onEngineAccess = () => {
    navigate("/c3");
  };
  // const onPrediAccess = () => {
  //   navigate("/ai");
  // };
  // const onSettings = () => {
  //   navigate("/settings");
  // };
  return (
    <header className="header">
      <div style={{ marginTop: 10 }}>
        <button className="btn" onClick={(e) => props.refresh()}>
          Refresh
        </button>
      </div>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <>
          <li>
            <button className="btn" onClick={onListFiles}>
              Child1
            </button>
          </li>
          <li>
            <button className="btn" onClick={onListGCFiles}>
              Child2
            </button>
          </li>
          {/* <li>
            <button className="btn" onClick={onEngineAccess}>
              Research
            </button>
          </li> */}
          {/* <li>
              <button className="btn" onClick={onPrediAccess}>
                <GiArtificialIntelligence /> Engine
              </button>
            </li> */}
          {/* <li>
              <button className="btn" onClick={onSettings}>
                <FiSettings /> Settings
              </button>
            </li>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li> */}
        </>
        {/* <>
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUser /> Register
            </Link>
          </li>
        </> */}
      </ul>
    </header>
  );
}

export default Header;
