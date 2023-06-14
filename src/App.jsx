import { useState } from "react";

import "./App.css";
import useListState from "./hooks/useListState";
import { Box, Flex } from "@mantine/core";

function App() {
    const [test, setTest] = useState();
    const { list, handlers } = useListState([]);

    console.log(list);
    return (
        <Flex direction={"column"} gap={15}>
            <Box>
                <input onChange={(e) => setTest(e.target.value)}></input>
                <button onClick={() => handlers.append(test)}>Push</button>
            </Box>
            <Box>
                <input onChange={(e) => setTest(e.target.value)}></input>
                <button onClick={() => handlers.pop(test)}>Pop</button>
            </Box>
        </Flex>
    );
}

export default App;
