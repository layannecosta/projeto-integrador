import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className="bg-primary text-white flex justify-between py-2 px-8 items-center">
            {/* Logo/Título clicável - navega para home */}
            <button onClick={() => navigate("/")}>
                <h1 className="text-[30px] font-bold">UnyBay</h1>
            </button>

            {/* Menu de navegação */}
            <ul className="flex gap-8 items-center">
                {/* Link para página inicial */}
                <li>
                    <Link to="/">Home</Link>
                </li>

                {/* Link para página institucional */}
                <li>
                    <Link to="#">Quem Somos</Link>
                </li>

                {/* Botão de login/acesso */}
                <li>
                    <button className="bg-secundary px-8 py-2 rounded-md">Entrar</button>
                </li>
            </ul>
        </div>
    )
}