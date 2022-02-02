import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//     const [toDo , setToDo] = useState("");
//     const [toDoError,setToDoError] = useState("");
//     const onChange = (event : React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: { value }, 
//         } = event;
//         setToDoError("");
//         setToDo(value);
//     }
//     const onSubmit = ( event : React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if(toDo.length < 10) {
//             return setToDoError("Todo 내용이 더 길어야 합니다!!");
//         }
//         console.log("submit");
//     }
//     return (
//     <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//                 <button>Add</button>
//                 {toDoError !== "" ? toDoError : null}
//             </form>
//         </div>
//     );    
// }

function ToDoList() {
    const { register , handleSubmit , formState:{ errors }, } = useForm();
    const onValid = (data:any) => {
        console.log(data);
    };
    console.log(errors);
    return (
      <div>
         <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
          <input {...register("email" , 
                    {
                      required: "Email is required", 
                      minLength: 5, 
                      pattern:{
                          value:/^[A-Za-z0-9._%+-]+@naver.com$/,
                          message:"Only naver.com emails allowed",
                      },
                    })} placeholder="Email" />
          <span>{errors?.email?.message}</span>
          <input {...register("firstName", {required: true, minLength: {value:5 , message:"need more"}})} placeholder="First Name" />
          <span>{errors?.firstName?.message}</span>
          <input {...register("lastName", {required: "Test is need answer", minLength: 5})} placeholder="Last Name" />
          <span>{errors?.lastNAme?.message}</span>
          <button>Add</button>
         </form>
       </div>
      );    
}

export default ToDoList;