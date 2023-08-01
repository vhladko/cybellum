import { Box, Button, TextField } from "@mui/material"

export const LoginPage = () => {
    return <Box sx={{
        m: 5
    }}>
        <form>
            <TextField label="Username" type="text" />
            <TextField label="Password" type="password" />
            <Button>Forgot password ?</Button>
        </form>
    </Box>
}
