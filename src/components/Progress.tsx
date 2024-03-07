import { Box, Progress as NBProgress } from "native-base";

export function Progress() {
  return (
    <Box w="50%" maxW="170">
      <NBProgress
        bg="purple.200"
        _filledTrack={{
          bg: "purple.500",
        }}
        value={70}
        mx="2"
        size='sm'
      />
    </Box>
  );
}
