import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useHistory } from 'react-router-dom';

export default function SearchBox({closeModal}) {
    const history = useHistory()
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        const val = event.target.value
        setCategory(val)
    };

    const handleClick = (e) =>{
        if(!category){
            return
        }
        closeModal(e)
        history.push(`/search/${category}`)
    }

    return (
        <Box sx={{ minWidth: 400 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Selected</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChange}
                >
                    <MenuItem value='Vegetables'>Vegetables</MenuItem>
                    <MenuItem value='Meats'>Meats</MenuItem>
                </Select>
                <br />
                <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
                    Send
                </Button>
            </FormControl>
        </Box>
    );
}
