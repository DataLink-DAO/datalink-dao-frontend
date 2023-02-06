import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Text,
  Container,
  Heading,
  Input,
  InputGroup,
  FormLabel,
  styled,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const StyledInputGroup = styled(InputGroup, {
  baseStyle: {
    flexDirection: "column",
  },
});

const DaoUser: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log("data: ", data);
    // TODO: Send data to backend or SC, await response and redirect to dashboard
  };

  return (
    <>
      <Navbar />
      <Container display="flex" flexDirection="column" rowGap={10}>
        <Heading>Hello, Publisher!</Heading>
        <Text color={'gray.600'} fontWeight={500} fontSize={{ base: 'md', sm: 'l', md: 'xl' }}>
          Verify your company and create tokenized, secure data for endless
          monetization possibilities.
        </Text>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 10,
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <StyledInputGroup>
            <FormLabel>Company Name{`*`}</FormLabel>
            <Input {...register("companyName")} />
          </StyledInputGroup>
          <StyledInputGroup>
            <FormLabel>Company Industry{`*`}</FormLabel>
            <Input {...register("companyIndustry")} />
          </StyledInputGroup>
          <StyledInputGroup>
            <FormLabel>Company Size</FormLabel>
            <Input {...register("companySize")} />
          </StyledInputGroup>
          <StyledInputGroup>
            <FormLabel>Company Location</FormLabel>
            <Input {...register("companyLocation")} />
          </StyledInputGroup>
          <StyledInputGroup>
            <FormLabel>Company Revenue</FormLabel>
            <Input {...register("companyRevenue")} />
          </StyledInputGroup>
          <StyledInputGroup>
            <FormLabel>Contact Person{`*`}</FormLabel>
            <Input {...register("contactPerson")} />
          </StyledInputGroup>
          <StyledInputGroup>
            <FormLabel>Contact Email{`*`}</FormLabel>
            <Input {...register("contactEmail")} />
          </StyledInputGroup>
          <StyledInputGroup>
            <FormLabel>Contact Phone Number</FormLabel>
            <Input {...register("contactPhoneNumber")} />
          </StyledInputGroup>
          <Button colorScheme="blue" marginTop={10} width="100%" type="submit" onClick={() => router.push("/onboardsuccess")}>
            Onboard
          </Button>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default DaoUser;
