function Header () {

    return (
        <>
            <div className="header py-[20px] absolute top-0 left-0 w-full z-10">
                <div className="container">
                    <div className="nr-header-flx-wr flex justify-between items-center ">
                        <div className="header-logo">
                            <h1 className="m-0 text-[30px] text-white font-bold"><a href="#">Animate</a></h1>
                        </div>
                        <div className="header-menu">
                            <ul className="flex gap-[20px] align-center text-white uppercase text-[14px]">
                                <li><a href="#" className="text-[#9749f8]">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="header-rght-btn">
                            <a href="#" className="btn btn-secondary">Let's Talk</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header