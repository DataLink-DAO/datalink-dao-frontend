import { Button, Flex, Center, Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="homepage">
      {/* NAVBAR */}
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box>
          <div className="header">
            {/* Having issues importing image, no idea why.  */}
            {/* <div className="logo">
              <Image src={DATANAV} alt="logo" width={100} height={100}/>
          </div> */}
          </div>
        </Box>
        <h3>
          <Link href="/products">Products</Link>
        </h3>
        <h3>
          <Link href="/industries">Industries</Link>
        </h3>
        <Link href="/dao">Join The DAO</Link>
        <h3>
          <Link href="/about">About</Link>
        </h3>
        <h3>
          <Link href="/contact">Contact</Link>
        </h3>

        {/* CONNECT WALLET HERE -> REDIRECT TO WALLET CONNECT FROM LAUNCH A */}
        <div className="button">
          <Button>Launch App</Button>
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
