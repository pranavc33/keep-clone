import { Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const DeleteNote = ({ note }) => {
    if (!note) {
        return null;
    }

    return (
        <Card>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
        </Card>
    );
}

DeleteNote.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        heading: PropTypes.string,
        text: PropTypes.string,
    }).isRequired,
};

export default DeleteNote;
