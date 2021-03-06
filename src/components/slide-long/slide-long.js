import React, { Component } from 'react';
import Boton from '../btn-more/buttonMore';
import { todos } from '../../jsonRenameFiles/todos.json';
import SlideVid from '../slide-vid/SlideVid'



console.log(todos);


 
export default class imageIntro extends Component {
    constructor(){
        //super para heredar las propiedades de componente react 
        super();
        this.state = {
            todos
        }
    }
    render() {
       const todos = this.state.todos.map((todo) =>{
        return(
              
            <div className = "imageIntroMain">
                <div className = "mainDescription">
                        <br/>
                        <p className = 'DescTit' >  
                        { todo.title }
                        </p>
                        <p className = "Description ">
                        { todo.description }   
                        </p>
                        <p className = 'Date'>
                            { todo.date }
                        </p>
                        <p className = 'Tag'>
                            { todo.tags }
                        </p>
                </div>
                <div className = 'imageConteiner'>
                        <img src = {todo.img1}
                        className = 'imgIntro' alt = "img1" />
                    <div className= "show">
                        <Boton className = "boton"></Boton>  
                        <div className = "imgMore">
                                <img src = {todo.img2}
                                className = 'imgIntro' alt = "img1" />
                                <img src = {todo.img3}
                                className = 'imgIntro' alt = "img1" />
                        </div>  
                    </div>        
                </div>
            </div>

               
            )
        })
        return (
            <div>
                <div> {todos}</div>   
                <SlideVid/> 
            </div>
        )
    }
}
