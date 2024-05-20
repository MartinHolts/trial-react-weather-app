// Layout.js
import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
	return (
		<div className="layout">
			<nav>
				<ul>
					<li>
						<Link to="/favorites">Favorites</Link>
					</li>
					<li>
						<Link to="/all-cities">All Cities</Link>
					</li>
				</ul>
			</nav>

			<div className="content">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
