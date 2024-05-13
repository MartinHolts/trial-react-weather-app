import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/all-cities">Blogs</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
