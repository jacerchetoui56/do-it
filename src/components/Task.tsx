import { DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, Textarea } from "@chakra-ui/react";
import { ITask } from "../utils/models";

type TaskProps = {
  index: number;
  task: ITask;
};

export default function Task({ index, task }: TaskProps) {
  return (
    <Box
      as="div"
      role="group"
      position="relative"
      rounded="lg"
      minW={200}
      pl={3}
      pt={3}
      pr={7}
      pb={1}
      boxShadow="xl"
      cursor="grab"
      bgColor={task.color}
    >
      <IconButton
        position="absolute"
        top={0}
        right={0}
        zIndex={100}
        colorScheme="solid"
        color="gray.700"
        opacity={0}
        icon={<DeleteIcon />}
        aria-label="Delete task"
        size="md"
        _groupHover={{
          opacity: 1,
        }}
      />
      <Textarea
        value={task.title}
        fontWeight="semibold"
        cursor="inherit"
        border="none"
        p={0}
        resize="none"
        minH={50}
        maxH={200}
        focusBorderColor="transparent"
        color="gray.700"
      />
    </Box>
  );
}
