import Banner from "../Components/banner"
import Purple from "../assets/images/purple-sky.png"

function Home() {

  return (
    <>
      <Banner/>
      <section className="fixed-banner">
        <div className="fixed-banner-img-wr">
          <img className="fixed-banner-img" src={Purple} alt="banner" />
        </div>
        <div className="fixed-banner-content-wr">
          <h2 className="heading"></h2>
        </div>
      </section>
    </>
  )
}

export default Home