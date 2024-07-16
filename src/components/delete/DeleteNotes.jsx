import { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../../context/DataProvider';

// Components
import DeleteNote from './DeleteNote';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
    const { deletedNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container spacing={2}>
                    {deletedNotes.map(note => (
                        <Grid item key={note.id} xs={12} sm={6} md={4}>
                            <DeleteNote note={note} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default DeleteNotes;
