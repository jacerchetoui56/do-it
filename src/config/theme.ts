import { extendTheme } from "@chakra-ui/react";

type ColorModeType = {
  colorMode: "dark" | "light";
};
const theme = extendTheme({
  styles: {
    global: (props: ColorModeType) => ({
      body: props.colorMode == "dark" ? "gray.800" : "white",
    }),
  },
});

export default theme;
