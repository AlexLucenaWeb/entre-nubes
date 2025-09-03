const Button = (props) => {

    return (
        <button data-component="Button" className="w-full min-w-26 sm:w-26 px-2 py-2 bg-blue-50 text-center text-blue-950 rounded-lg hover:bg-white hover:shadow-xl cursor-pointer transition-all duration-300">
            {props.label}
        </button>
    )
}

export default Button