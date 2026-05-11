export function Header () {
    return (
        <header className="flex justify-around items-center sticky top-0 z-50 w-full h-18 border-b border-white/10  backdrop-blur-md">
            <h2>Vinicius Dias</h2>
            <nav>
                <ul className="flex gap-20">
                    <li>
                        <a href="/about"></a>Sobre
                    </li>
                    <li>
                        Habilidades
                    </li>
                    <li>
                        Experiência
                    </li>
                    <li>
                        Educação
                    </li>
                </ul>
            </nav>
            <h6>future toggle theme btn</h6>
        </header>
    );
}