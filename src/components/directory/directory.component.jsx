import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';
import SECTION_DATA from '../../data/sections.data';

class Dictory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: SECTION_DATA
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherProps}) =>(
                        <MenuItem key={id} {...otherProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Dictory;