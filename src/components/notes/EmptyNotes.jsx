import {
    LightbulbOutlined as Lightbulb
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Light = styled(Lightbulb)`
    font-size: 120px;
    color: #F5F5F5;
`;

const Text = styled(Typography)`
    color: #80868b;
    font-size: 12px;
`;

const EmptyContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
`;

const EmptyNotes = () => {
    return (
        <EmptyContainer>
            <Light />
            <Text>Notes you add appear here</Text>
        </EmptyContainer>
    );
}

export default EmptyNotes;
