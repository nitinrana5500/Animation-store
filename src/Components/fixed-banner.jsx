import Purple from "../assets/images/purple-sky.png"

function FixedBanner() {
    return (
        <section className="fixed-banner relative">
            <div className="fixed-banner-img-wr">
                <img className="fixed-banner-img h-full w-full" src={Purple} alt="banner" />
            </div>
            <div className="fixed-banner-content-wr absolute left-[50%] top-[50%] translate-[-50%] w-full max-w-[550px]">
                <h2 className="heading text-[60px] leading-[1.2] text-center text-white">Voyeur Verite is an independent, artist-founded creative studio</h2>
            </div>
        </section>
    )
}

export default FixedBanner