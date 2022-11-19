import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { menuData } from "../../data/menu";

export default function Menu({ data = menuData }) {
  return (
    <Flex position={"relative"} margin="80px 0 0" zIndex={"dropdown"}>
      <Flex position={"fixed"} top="0" left="0" w="100vw" h="90px" bg="#FFF">
        <Flex
          justifyContent={"space-between"}
          w={{ lg: "1280px" }}
          margin="0 auto"
          alignItems={"center"}
        >
          <Image src={"logo_website.svg"} alt="" h="70%" />
          <Grid w="70%" templateColumns={`repeat(${data.nav.length},1fr)`}>
            {data.nav.map((item, index) => (
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
