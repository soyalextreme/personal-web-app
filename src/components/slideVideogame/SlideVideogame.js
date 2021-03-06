import React, { Component } from 'react'
import {descriptionJumpBaller} from '../../jsonRenameFiles/descriptionJumpBaller'
import Button from '../btn-download/btndownload'
import './slideVideoGame.css'


export default class SlideVideogame extends Component {
    constructor(){

        super();
        this.state={
            descriptionJumpBaller

        }
    }
    
    render() {
        const renderMap = this.state.descriptionJumpBaller.map((descr,i)=>{
            return(
               <div className= 'card-Container'>


                    <div className = 'tittle-container'>
                         <p> {descr.title}</p>
                    </div>
                    <div className = 'tags-container'>
                         <p> {descr.date}</p>
                    </div>
                    <div className = 'tags-container'>
                        <p> {descr.tags}</p>
                    </div>
                    <div className = 'description-container'>
                        <p> {descr.description}</p>
                    </div>
                    <div className = 'image-containers'>
                        <img src = 
                        {descr.imag1}
                        className ='image'/>
                        <img src = 
                        {descr.imag2}
                        className ='image'/>
                        <img src = 
                        {descr.imag3}
                        className ='image'/>
                        <img src = 
                        {descr.imag4}
                        className ='image'/>
                    </div>
                    <div className = 'description-container'>
                         <p> {descr.description2}</p>
                    </div>
                    <div className = 'tittle-container'>
                        <p>Try free</p>
                    </div>
                    <Button className = 'button-container'/>
                </div>
            )
        })
        return (
            <div>
                <div> {renderMap}</div>
            </div>
        )
    }
}
