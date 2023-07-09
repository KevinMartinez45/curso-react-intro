import  CircularProgress  from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
import './TodosIcon.css'

function TodosLoading () {
    return (
        <Box className = 'Icon-loading'>
            <CircularProgress />
        </Box>
    )
}

export { TodosLoading}