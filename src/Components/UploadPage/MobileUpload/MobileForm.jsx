
function MobileForm(props){
       
    return(
        <div className="md:hidden sm:flex flex-col mx-4 my-16">
            <div className="sm:flex flex-col bg-gray-100 px-4 py-4 drop-shadow my-4">
                <h1 className="text-xl font-medium">Title</h1>
                <p className="text-[0.75rem] font-light">Add a Title to reference your document</p>
                <input type="text" className="bg-gray-100 border-b-[0.5px] border-b-gray-300 h-8 focus:outline-none"/>
            </div>
            <div className="sm:flex flex-col bg-gray-100 px-4 py-4 drop-shadow my-4">
                <h1 className="text-xl font-medium">Description</h1>
                <p className="text-[0.75rem] font-light">Add description for your document</p>
                <input type="text" className="bg-gray-100 border-b-[0.5px] border-b-gray-300 h-8 focus:outline-none"/>
            </div>
        </div>
    )
}

export default MobileForm;