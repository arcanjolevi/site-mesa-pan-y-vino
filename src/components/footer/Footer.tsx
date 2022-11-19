import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { projectsData } from "../../data/projects";
import { Constants } from "../../theme/constants";
import { BsFacebook, BsInstagram, BsYoutube, BsSpotify } from "react-icons/bs";

export default function Footer({ data = projectsData }) {
  return (
    <>
      <Flex w="100%" flexDirection={"column"}>
        <Flex
          padding={"50px 0 50px"}
          alignItems="center"
          w={Constants.contentWidth}
          margin="0 auto"
          flexDirection={"column"}
          gap="50px"
        >
          <Heading size="xl" margin="0 0 40px">
            Siguenos
          </Heading>
          <Flex gap="50px">
            <Box
              cursor={"pointer"}
              transition="0.5s"
              _hover={{ opacity: "0.5" }}
            >
              <BsFacebook size="100px" color="#1A202C" />
            </Box>
            <Box
              cursor={"pointer"}
              transition="0.5s"
              _hover={{ opacity: "0.5" }}
            >
              <BsYoutube size="100px" color="#1A202C" />
            </Box>
            <Box
              cursor={"pointer"}
              transition="0.5s"
              _hover={{ opacity: "0.5" }}
            >
              <BsSpotify size="100px" color="#1A202C" />
            </Box>
            <Box
              cursor={"pointer"}
              transition="0.5s"
              _hover={{ opacity: "0.5" }}
            >
              <BsInstagram size="100px" color="#1A202C" />
            </Box>
          </Flex>
        </Flex>
        <Box margin="50px auto 50px">
          <Text>
            © 2022 • MESA, PAN Y VINO • Todos los derechos reservados •
            Desarrolado por Levi Arcanjo
          </Text>
        </Box>
      </Flex>
    </>
  );
}
