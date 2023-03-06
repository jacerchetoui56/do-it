import "./App.css";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Task from "./components/Task";
import { ColumnType } from "./utils/enums";
import Column from "./components/Column";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const columns = [];

function App() {
  return (
    <>
      <Heading
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, #287bca, #d800ff)"
        bgClip="text"
        mt={4}
      >
        Welcome to Do-It
      </Heading>
      <Container maxW="container.lg" px={4} py={10}>
        <DndProvider backend={HTML5Backend}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 16, md: 4 }}
          >
            <Column column={ColumnType.TODO} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.BLOCKED} />
            <Column column={ColumnType.COMPLETE} />
          </SimpleGrid>
        </DndProvider>
      </Container>
    </>
  );
}

export default App;
