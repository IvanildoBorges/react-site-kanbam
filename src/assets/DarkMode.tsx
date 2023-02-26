export default function DarkMode({...props}) {
    const classe: string = props.classe;
    const cor: string = props.cor;
    const tamanho: number = props.tamanho;

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
            d="M87.823 60.7a1.485 1.485 0 00-1.695-.214 33.03 33.03 0 01-44.232-12.718A33.03 33.03 0 0152.997 3.103a1.481 1.481 0 00-.598-2.727c-9.843-1.265-19.59.692-28.193 5.66C13.8 12.041 6.356 21.743 3.246 33.35S1.732 57.08 7.741 67.487c6.008 10.407 15.709 17.851 27.316 20.961A45.26 45.26 0 0046.774 90c7.795 0 15.489-2.044 22.42-6.046 8.601-4.966 15.171-12.43 18.997-21.586a1.484 1.484 0 00-.368-1.668z"
            transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        </svg>
    );
}