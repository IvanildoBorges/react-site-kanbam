function Icon({ tamanho, cor1, cor2, classe }: {
  tamanho: number, cor1: string, cor2: string, classe: string
}
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={tamanho}
      height={tamanho}
      viewBox="0 0 256 256"
      className={classe}
    >
      <g fill="none" strokeMiterlimit="10" strokeWidth="0">
        <path
          fill={cor1}
          d="M87 14.18H30.6a3 3 0 110-6H87a3 3 0 110 6z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        <path
          fill={cor2}
          d="M87 42.94H30.6a3 3 0 110-6H87a3 3 0 110 6zM87 71.699H30.6a3 3 0 110-6H87a3 3 0 110 6z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        <path
          fill={cor1}
          d="M10.844 27.083C4.864 27.083 0 22.219 0 16.24S4.864 5.396 10.844 5.396c5.979 0 10.843 4.864 10.843 10.844 0 5.979-4.864 10.843-10.843 10.843z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        <path
          fill={cor2}
          d="M10.844 55.844C4.864 55.844 0 50.979 0 45s4.864-10.844 10.844-10.844c5.979 0 10.843 4.864 10.843 10.844s-4.864 10.844-10.843 10.844zM10.844 84.604C4.864 84.604 0 79.739 0 73.76s4.864-10.844 10.844-10.844c5.979 0 10.843 4.864 10.843 10.844s-4.864 10.844-10.843 10.844z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        <path
          fill={cor1}
          d="M61.699 24.3H30.6a3 3 0 110-6h31.1a3 3 0 11-.001 6z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        <path
          fill={cor2}
          d="M61.699 53.061H30.6a3 3 0 110-6h31.1a3 3 0 11-.001 6zM61.699 81.82H30.6a3 3 0 110-6h31.1a3 3 0 11-.001 6z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;