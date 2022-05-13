import React,{} from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
function MenuBar(props) {
    console.log("1")
    return (
        <>
            <Paper>
                <MenuList>
                    {props.brands.map((brand) => (
                        <MenuItem key={brand.id}
                        onClick={()=>props.idBrand(brand.id)}
                        >
                            {brand.attributes.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Paper>
        </>
    );
}

export default MenuBar;