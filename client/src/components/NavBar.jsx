import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {


	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
				<div className="container-fluid">

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">

						<ul className="navbar-nav ml-1">
							<li className="nav-item">
								<NavLink to="/" className="nav-link" href="#">Főoldal</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/stats" className="nav-link" href="#">Statisztika</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/megyek" className="nav-link" href="#">Szűrés megyék szerint</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}