//Footer component

const FooterComponent = () => {
    return (
        <footer className={`flex w-full h-auto justify-start items-stretch py-2 px-16 bg-sky-300`}>
            <div id="logo" className={`w-64 h-auto flex p-2`}>
                <img src="/prodam.png" alt="Logo" className='w-20' />
            </div>
        </footer>
    )
}

export default FooterComponent