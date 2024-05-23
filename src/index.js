import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Favorites from "./pages/Favorites";
import AllCities from "./pages/AllCities";
import NoPage from "./pages/NoPage";
import { TestProvider } from './context/TestContext'; // Ensure this path is correct

export default function App() {
	return (
		<TestProvider> {/* Wrap your entire app with TestProvider */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Favorites />} />
						<Route path="all-cities" element={<AllCities />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</TestProvider>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
