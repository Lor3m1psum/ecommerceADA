import { Box, Container, Heading, Text, Divider } from "@chakra-ui/react";

const About = () => {
  return (
    <Box bg="gray.100" minH="80vh" py={14}>
      <Container
        maxW="container.md"
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="md"
      >
        <Heading as="h1" size="xl" textAlign="center" color="pink.900" mb={4}>
          About Us
        </Heading>
        <Divider mb={4} />
        <Text fontSize="lg" textAlign="justify" color="gray.700">
          <b>eCommerce ADA</b> is an online store designed especially for
          students and graduates of <b>ADA</b>, a nonprofit academy that
          empowers women in technology.
        </Text>
        <Text fontSize="lg" textAlign="justify" mt={4} color="gray.700">
          At ADA, we believe that knowledge is power, and access to high-quality
          tools can make a significant difference in shaping a career in tech.
          That’s why we created this platform: a space where you can find
          essential tech products such as accessories, peripherals, components,
          and more—at affordable prices and in USD—tailored to your needs as a
          developer.
        </Text>
        <Text fontSize="lg" textAlign="justify" mt={4} color="gray.700">
          This initiative is <b>100% nonprofit</b> and aims to support your
          growth by providing everything you need to keep learning, coding, and
          creating.
        </Text>
        <Text
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
          mt={6}
          color="pink.900"
        >
          We are ADA. We are technology. We are community. 💻💜
        </Text>
      </Container>
    </Box>
  );
};

export default About;
