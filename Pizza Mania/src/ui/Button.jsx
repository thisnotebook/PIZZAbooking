function Button({ children, disabled }) {
    return (
        <button
            disabled={disabled}
            className="bg-yellow-500 px-4 py-2 hover:bg-yellow-300
            uppercase font-semibold text-stone-800
            inline-block tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2
             disabled:cursor-not-allowed ">
            {children}
        </button>
    )
}

export default Button
