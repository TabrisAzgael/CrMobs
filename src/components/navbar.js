import { Component } from "react";
import Menu from "./menu";
import Button from "./button";
import Style from "./Style";


class Navbar extends Component {
    render() {
        return (
            <nav style={Style.nav} >
                <Button />
                <h1>LÁGRIMA NEGRA</h1>
                <Menu />
            </nav>
    )
}}

export default Navbar