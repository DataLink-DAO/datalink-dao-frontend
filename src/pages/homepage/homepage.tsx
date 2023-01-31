import Image from "next/image";
import DATADAO from './datalink.jpg'
import DAL_rvsd from "../../components/DAL_rvsd.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { Card } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";


const Homepage = () => {
  const router = useRouter()

return (
          <div className="homepage">

            <Navbar />

            <Container maxW='lg'>
            {/* DATADAO LOGO */}
              <br />
              <div className="logo">
                <Image src={DAL_rvsd} alt="logo" width={500} height={500}/>
              </div>

              <br /><br />

              <Card fontSize="2xl" w="100%" mx="auto">
                 Building the next generation of data validation and data-sharing tools
                 and infrastructure.
              </Card>

              <br /><br />

              <Card fontSize="2xl" w="100%" mx="auto">
                  Contact support@datalinkdao.com to talk more about
                 our solutions in data validation.
              </Card>

              <br /><br />

                <Button bg="blue" color="white" w="45%" fontSize="3xl" alignItems="center" justifyContent="center" onClick={() => router.push('/about')}>
                  {/* <Button1 /> */}
                  Learn More
                </Button>


              <div className="homepage-footer">
                {/* <Footer /> */}

                {/* <h2>DataLink DAO</h2> */}
                {/* <h3>Learn More about the newest DAO in town</h3> */}
                {/* <button>Learn More</button> */}
                <br />
                <br />
              </div>
              </Container>
        </div>
    )
}

export default Homepage;