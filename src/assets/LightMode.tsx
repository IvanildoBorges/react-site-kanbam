type Props = {
    classe: string,
    cor: string,
    tamanho: number
}

function LightMode({classe, cor, tamanho}: Props) {
    return (
        <svg
        className={classe}
        xmlns="http://www.w3.org/2000/svg"
        width={tamanho}
        height={tamanho}
        viewBox="0 0 256 256"
        >
        <path
            fill={cor}
            strokeMiterlimit="10"
            strokeWidth="0"
            d="M46.715 90a45.26 45.26 0 01-11.717-1.552C23.391 85.337 13.69 77.893 7.682 67.487 1.674 57.08.077 44.957 3.188 33.349c3.11-11.607 10.554-21.308 20.961-27.316C32.75 1.066 42.498-.89 52.342.374a3 3 0 011.21 5.517 30.316 30.316 0 00-10.188 40.996A30.315 30.315 0 0083.96 58.56a3 3 0 014.172 3.807c-3.826 9.156-10.395 16.621-18.997 21.586C62.204 87.955 54.509 90 46.715 90zM43.74 6.101c-5.805.421-11.436 2.15-16.592 5.127-9.019 5.207-15.47 13.614-18.166 23.674-2.695 10.059-1.312 20.567 3.895 29.586 5.207 9.019 13.614 15.471 23.673 18.165 10.058 2.697 20.567 1.311 29.585-3.895 5.156-2.977 9.47-6.989 12.737-11.806-15.547 4.094-32.303-2.515-40.705-17.066-8.399-14.55-5.74-32.368 5.573-43.785z"
            transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        </svg>
    );
}

export default LightMode;