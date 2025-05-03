import { NavLink } from "react-router-dom";
import "../style/navBar.css";


export const NavBar = () => {
	return (
		<nav className="nav-bar">
			<ul className="nav-bar__list">
				<li>Aca va una imagen</li>
				<li>
					<NavLink
						to="/"
						className={({isActive}) =>
							(isActive ? "nav-link" : "unselected")
						}
					>
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink
						to="product"
						className={({isActive}) =>
							(isActive ? "nav-link" : "unselected")
						}
					>
						Products
					</NavLink>
				</li>
				<li>
					<NavLink
						to="car"
						className={({isActive}) =>
							(isActive ? "nav-link" : "unselected")
						}
					>
						Carrito de compras
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
