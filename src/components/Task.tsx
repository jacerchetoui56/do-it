import { DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, Textarea } from "@chakra-ui/react";
import { ITask } from "../utils/models";
import ResizeTextarea from "react-textarea-autosize";

type TaskProps = {
  index: number;
  task: ITask;
  onDelete: (id: ITask["id"]) => void;
  onUpdate: (id: string, updateTask: Omit<Partial<ITask>, "id">) => void;
};

export default function Task({
  index,
  task,
  onDelete: handleDelete,
  onUpdate: handleUpdate,
}: TaskProps) {
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

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
        onClick={() => handleDelete(task.id)}
      />
      <Textarea
        as={ResizeTextarea}
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
        onChange={handleTitleChange}
      />
    </Box>
  );
}
