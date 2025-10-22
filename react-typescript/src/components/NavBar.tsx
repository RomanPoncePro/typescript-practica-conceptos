import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <nav className="flex flex-wrap items-center justify-between gap-4 px-6 py-3 max-w-7xl mx-auto">
        <button
          aria-label="Abrir menú"
          className="p-2 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>

        <a
          href="/"
          className="text-xl font-semibold tracking-wide hover:text-blue-300"
        >
          MiSitio
        </a>

        <form
          role="search"
          aria-label="Buscar en el sitio"
          className="grow max-w-md flex items-center gap-2 bg-blue-800 rounded-full px-3 py-1 focus-within:ring-2 focus-within:ring-blue-500"
        >
          <label htmlFor="search" className="sr-only">
            Buscar
          </label>
          <input
            type="search"
            id="search"
            name="q"
            placeholder="Buscar..."
            className="w-full bg-transparent placeholder-blue-300 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-blue-700 hover:bg-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="px-4 py-4 "
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </form>

        <ul className="flex flex-wrap items-center gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "focus-within:ring-2 focus-within:ring-blue-500"
                    : "unselected"
                } text-white  px-4 py-2 rounded-full hover:bg-blue-800 transition-colors`
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="product"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "focus-within:ring-2 focus-within:ring-blue-500"
                    : "unselected"
                } text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors`
              }
            >
              Productos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="car"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "focus-within:ring-2 focus-within:ring-blue-500"
                    : "unselected"
                } text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors flex items-center gap-2`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
