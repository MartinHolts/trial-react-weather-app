import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Favorites</Link>
					</li>
					<li>
						<Link to="/all-cities">All Cities</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
