import { useContext } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";

const Note = ({ note, isArchived }) => {
    const { notes, setNotes, archiveNotes, setArchiveNotes, setDeletedNotes } = useContext(DataContext);

    if (!note) {
        return null;
    }

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr]);
    }

    const unarchiveNote = (note) => {
        const updatedArchiveNotes = archiveNotes.filter(data => data.id !== note.id);
        setArchiveNotes(updatedArchiveNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }

    return (
        <Card>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
                <CardActions>
                    {isArchived ? (
                        <button
                            fontSize="small"
                            onClick={() => unarchiveNote(note)}
                        >
                            Unarchive
                        </button>
                    ) : (
                        <Archive
                            fontSize="small"
                            style={{ marginLeft: 'auto' }}
                            onClick={() => archiveNote(note)}
                        />
                    )}
                    <Delete
                        fontSize="small"
                        onClick={() => deleteNote(note)}
                    />
                </CardActions>
            </CardContent>
        </Card>
    );
}

Note.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        heading: PropTypes.string,
        text: PropTypes.string,
    }).isRequired,
    isArchived: PropTypes.bool,
};

export default Note;