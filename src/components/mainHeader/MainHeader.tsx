import { Flex } from "@chakra-ui/react";

export default function MainHeader() {
  return (
    <Flex maxW="100vw" w="100%" h="100vh" maxH="1080px" overflow={"hidden"}>
      <video
        style={{
          objectFit: "cover",
        }}
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
      >
        <source src="video.mp4" type="video/mp4" />
      </video>
    </Flex>
  );
}
