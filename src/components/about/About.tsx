import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { aboutData } from "../../data/about";
import { Constants } from "../../theme/constants";

export default function About({ data = aboutData }) {
  return (
    <Flex w="100%">
      <Flex padding={"100px 0"} w={Constants.contentWidth} margin="0 auto">
        <Grid templateColumns={"1fr 1fr"} w="100%" h="400px" gap="60px">
          <Image src={data.img1} alt="" w="100%" h="100%" objectFit={"cover"} />
          <Flex flexDirection={"column"} textAlign="center" margin="auto auto">
            <Heading size="xl" margin="0 0 40px">
              {data.title}
            </Heading>
            <Text fontSize={"lg"}>{data.description1}</Text>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
}
