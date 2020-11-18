import React from "react";
const Travel = () => {
	return (
		<div className="travelContainer ">
			<div className="travelBox">
				<div className="travelItem1">
					<h4 style={{ color: "white" }}>Enjoy your trip </h4>
					<div className="departureDate" style={{ backgroundColor: "white" }}>
						<table className="table table-dark" style={{ backgroundColor: "none" }}>
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">City</th>
									<th scope="col">Departure</th>
									<th scope="col">Return</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>MIA</td>
									<td>
										<i className="fas fa-plane-departure" style={{ color: "white" }} />
										<br />
										12/02/20 <br />
										5:11 AM <br />
										JFKNew York-Kennedy, NY (JFK)
										<br />
										Flight number559
									</td>
									<td>
										<i className="fas fa-plane-arrival" style={{ color: "white" }} /> <br />
										12/16/20
										<br />
										7:56 AM
										<br />
										PBIWest Palm Beach, FL (PBI)
										<br />
										Flight number754
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Travel;
