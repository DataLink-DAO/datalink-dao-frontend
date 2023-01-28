import Image from "next/image";
import DATADAO from './datalink.jpg'
import Navbar from "@/components/Navbar";


const Homepage = () => {

      return (
        <div className="homepage">
              <Navbar />
              {/* DATADAO LOGO */}
              <div className="logo">
                <Image src={DATADAO} alt="logo" width={500} height={500}/>
              </div>

              <div className="homepage-footer">
                <h2>DataLink DAO</h2>
                <h3>Learn More about the newest DAO in town</h3>
                <button>Learn More</button>
              </div>
        </div>
    )
}

export default Homepage;