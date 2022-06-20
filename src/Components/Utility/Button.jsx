function Button(props){
    const btnStyle = `bg-red-600 hover:bg-red-500 text-white lg:px-12 md:px-10 sm:px-6 py-[0.4rem] rounded-md font-lato font-bold tracking-wide sm:max-w-[45%]${props.className}`
    return(
        <button className={btnStyle} onClick={()=>props.run()}>{props.name}</button>
    )
}

export default Button;