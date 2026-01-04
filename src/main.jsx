// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Components
import App from "./App.jsx";

// Styling
import "./index.scss";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
