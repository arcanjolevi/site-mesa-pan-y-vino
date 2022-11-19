import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { projectsData } from "../../data/projects";
import { Constants } from "../../theme/constants";

export default function Testimony({ data = projectsData }) {
  return (
    <Flex w="100%" flexDirection={"column"}>
      <Flex
        padding={"50px 0"}
        w={Constants.contentWidth}
        margin="0 auto"
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Heading size="xl" margin="0 0 40px">
          Testimonios
        </Heading>
        <iframe
          width="900px"
          height="500px"
          src="https://www.youtube.com/embed/wtia1woW-Sk"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
        {/* <Grid templateColumns={"1fr 1fr"} w="100%" h="500px" gap="60px">
          <Flex flexDirection={"column"} textAlign="center" margin="auto auto">
            <Heading size="xl" margin="0 0 40px">
              {data.title}
            </Heading>
            <Text fontSize={"lg"}>{data.description1}</Text>
          </Flex>
          <Image src={data.img1} alt="" w="100%" h="100%" objectFit={"cover"} />
        </Grid> */}
      </Flex>
    </Flex>
  );
}
