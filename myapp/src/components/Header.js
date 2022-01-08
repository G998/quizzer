function Header({counter, word, score, limit}) {
    return (
        <header>
            <h2>Word #{counter}: {word}</h2>
            <h3>Score: {score} / {limit}</h3>
        </header>
    )
}

export default Header
