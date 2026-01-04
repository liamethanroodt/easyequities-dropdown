// Components
import CardStack from "./components/CardStack/CardStack";

// Styling
import "./App.scss";

function SubcardContent({ title, description }) {
	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", height: "100%" }}>
			<div style={{ flex: "1 1 auto", minWidth: 0 }}>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<button
				style={{
					background: "none",
					width: 90,
					height: 40,
					cursor: "pointer",
					borderRadius: 8,
					border: "1px solid #86888B",
					flexShrink: 0,
				}}
			>
				Activate
			</button>
		</div>
	);
}

function App() {
	const subcards = [
		<SubcardContent
			title="United States Markets"
			description="Tap into the largest financial market in the world by investing in a diverse portfolio of U.S. stocks and securities."
		/>,
		<SubcardContent title="Australian Markets" description="Diversify your portfolio by investing in the dynamic and diverse Australian stock market." />,
		<SubcardContent
			title="United Kingdom Markets"
			description="Gain exposure to leading UK companies and enjoy the potential growth of investing in the UK markets."
		/>,
		<SubcardContent
			title="European Markets"
			description="Expand your investment reach across European markets, accessing a wide range of stocks across the continent."
		/>,
	];

	return (
		<div className="app">
			<div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
				<CardStack title={`${subcards?.length} Available Accounts`} subcards={subcards} />
				<CardStack title={`${subcards?.length} Available Accounts`} subcards={subcards} />
			</div>
		</div>
	);
}

export default App;
