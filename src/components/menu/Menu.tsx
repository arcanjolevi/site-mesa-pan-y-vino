import { Flex, Grid, Image, Text } from "@chakra-ui/react";

const nav = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Quienes Somos",
    link: "/",
  },
  {
    text: "Proyectos",
    link: "/",
  },
  {
    text: "Testimonios",
    link: "/",
  },
  {
    text: "Contacto",
    link: "/",
  },
  {
    text: "Testimonios",
    link: "/",
  },
];

export default function Menu() {
  return (
    <Flex position={"relative"} margin="80px 0 0">
      <Flex position={"fixed"} top="0" left="0" w="100vw" h="90px" bg="#FFF">
        <Flex
          justifyContent={"space-between"}
          w={{ lg: "1280px" }}
          margin="0 auto"
          alignItems={"center"}
        >
          <Image src={"logo_website.svg"} alt="" h="70%" />
          <Grid w="70%" templateColumns={`repeat(${nav.length},1fr)`}>
            {nav.map((item, index) => (
              <Text
                fontSize={"16px"}
                fontWeight="600"
                key={index}
                margin="auto"
              >
                {item.text}
              </Text>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
}
