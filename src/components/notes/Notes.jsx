import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Components
import Form from "./Form";
import Note from "./Note";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {
    const { notes } = useContext(DataContext);

    return (
        <Box sx={{ display: "flex", width: "100%" }}>
            <Box sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
                <DrawerHeader />
                <Form />
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    {notes.map((note) => (
                        <Grid item key={note.id} xs={12} sm={6} md={4}>
                            <Note note={note} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Notes;
