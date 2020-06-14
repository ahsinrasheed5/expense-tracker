import React from 'react'
import ThemeToggler from './ThemeToggler';

const headerStyle = {
    padding: "1rem",
    dispaly: "flex",
    justifyContent: 'space-between',
    alignItems: 'center'
}

const Header = () =>{
    retrun (
        <header style= {headerStyle}>
            <h1>Context API</h1>
            <ThemeToggler/>
        </header>
    )
}

export default Header;
