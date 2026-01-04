// React
import { useState } from "react";

// Assets
import accountsIcon from "../../assets/images/accounts.png";
import dropdownIcon from "../../assets/icons/chevrons-right.svg";

// Styling
import "./CardStack.scss";
function CardStack({ title, children, subcards = [] }) {
	const [isOpen, setIsOpen] = useState(false);
	const stateClass = isOpen ? "open" : "closed";

	return (
		<div className={`card-stack-container ${stateClass}`} style={{ "--total": subcards.length }}>
			<div className={`main-card ${stateClass}`} onClick={() => setIsOpen(!isOpen)}>
				<img src={accountsIcon} alt="Accounts" className="card-icon" />
				<div className="card-content">{children || <h3>{title}</h3>}</div>
				<div className="expand-icon" style={{ transform: `rotate(${isOpen ? 90 : 0}deg)` }}>
					<img src={dropdownIcon} alt="dropdown-toggle" />
				</div>
			</div>
			{subcards.length > 0 && (
				<div className={`subcards-container ${stateClass}`}>
					{subcards.map((subcard, index) => (
						<div key={index} className={`subcard ${stateClass}`} style={{ "--index": index, "--total": subcards.length }}>
							{subcard}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default CardStack;
