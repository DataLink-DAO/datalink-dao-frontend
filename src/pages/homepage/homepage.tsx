import Image from "next/image";
import DATADAO from './datalink.jpg'
import { Button, Heading, Flex, Center, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";


const Homepage = () => {

      const router = useRouter();

      const handleProduct = () => {
        router.push('./products')
        return;
      }

      return (
        <div className="homepage">

          {/* NAVBAR */}
            <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box>
              <div className="header">
                <div className="logo">
                    <Image src={DATADAO} alt="logo" width={100} height={100}/>
                </div>
                </div>
            </Box>
                <h3>
                  <Link href="/products" onClick={handleProduct}>
                  Products
                  </Link>
                </h3>
                <h3>
                  <Link href="/industries">
                  Industries
                  </Link>
                </h3>
                  <Link href="/join">
                  Join The DAO
                  </Link>
                <h3>
                  <Link href="/whitepaper">
                  Whitepaper
                  </Link>
                </h3>
                <h3>
                  <Link href="/about">
                    About
                  </Link>
                </h3>
                <h3>
                  <Link href="/contact">
                  Contact
                  </Link>
                </h3>

              {/* CONNECT WALLET HERE -> REDIRECT TO WALLET CONNECT FROM LAUNCH A */}
                <div className="button">
                  <Button>Launch App</Button>
                </div>
            </Flex>
                  
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