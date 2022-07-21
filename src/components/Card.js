import React, {useState} from 'react';
import EditTask from '../modals/EditTask'
import swal from 'sweetalert2'


const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false, {tittle: "", done: false});

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    
    const popUp = () => {
        
        new swal({
            title: "Good job!",
            text: "You completed the task!",
            icon: "success",
          });

         setTimeout(handleDelete, 3000)
          
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" ></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                   
                    <i class="fas fa-check-circle pointer mr-3" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {popUp}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;