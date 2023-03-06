import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColumnType } from "../utils/enums";
import { AddIcon } from "@chakra-ui/icons";
import { ITask } from "../utils/models";
import Task from "./Task";
import useColumnTasks from "../hooks/useColumnTasks";

type ColumnProps = {
  column: ColumnType;
};

const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: "gray",
  "In Progress": "blue",
  Blocked: "red",
  Complete: "green",
};

// const tasks: ITask[] = [
//   {
//     id: "1",
//     title: "Create a new project",
//     color: "blue.300",
//     column: ColumnType.TODO,
//   },
//   {
//     id: "2",
//     title: "Create a new project",
//     color: "red.300",
//     column: ColumnType.TODO,
//   },
//   {
//     id: "3",
//     title: "Create a new project",
//     color: "green.300",
//     column: ColumnType.TODO,
//   },
// ];

export default function Column({ column }: ColumnProps) {
  const { tasks, addEmptyTask, deleteTask, updateTask } =
    useColumnTasks(column);

  const ColumnTasks = tasks.map((task, index) => {
    return (
      <Task
        onDelete={deleteTask}
        onUpdate={updateTask}
        index={index}
        key={task.id}
        task={task}
      />
    );
  });
  return (
    <Box mx={2}>
      <Heading fontSize="md" mb={4} letterSpacing="wide">
        <Badge
          px={2}
          py={1}
          rounded="lg"
          colorScheme={ColumnColorScheme[column]}
        >
          {column}
        </Badge>
      </Heading>
      <IconButton
        size="xs"
        w="full"
        color={useColorModeValue("gray.500", "gray.400")}
        bgColor={useColorModeValue("gray.100", "gray.700")}
        _hover={{
          bgColor: useColorModeValue("gray.200", "gray.600"),
        }}
        py={2}
        variant="solid"
        colorScheme="black"
        aria-label="Add task"
        icon={<AddIcon />}
        onClick={addEmptyTask}
      />
      <Stack
        direction={{ base: "row", md: "column" }}
        h={{ base: 300, md: 600 }}
        p={4}
        mt={2}
        spacing={4}
        bgColor={useColorModeValue("gray.50", "gray.900")}
        rounded="lg"
        overflow="auto"
        boxShadow="md"
      >
        {ColumnTasks}
      </Stack>
    </Box>
  );
}
