import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState=(props)=>{

   
  /*  const s1={
        "name":"Harry",
        "class":"5b"
    }

const [state,setState]=useState(s1);

   const update=()=>{
    setTimeout(()=>{
        setState({
        "name":"anmol",
        "class":"8a"
        })
    },1000)   
   }
*/

const host="http://localhost:5000"
const initialNotes=[]


const [notes,setNotes]=useState(initialNotes)


// add a note
const addNote=async (title,description,tag)=>{

    // todo: API CALL
    const response = await fetch(`${host}/api/notes/
    addnote`, {
        method: 'POST',
    
        headers: {
          'Content-Type': 'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjI4N2M5MTEwMjViYjYzYjMwNWZhIn0sImlhdCI6MTY0ODMwNjMwMH0.5SdC_wGOSToMo5EnrdSBqdirfDLQ-DAaoBaGJfkYZRA"
     
        },
       
        body: JSON.stringify({title,description,tag}) 
      });


    console.log('add a new note')
 const note={
    
        "_id":{"$oid":"62386d539256da1a2cfc4ad1"},
        "user":{"$oid":"62386c9aae09403f6c57d9c4"},
        "title":title,
        "description":description,
        "tag":tag,
        "date":{"$date":"2022-03-21T12:19:31.434Z"},"timestamp":{"$date":"2022-03-21T12:19:31.434Z"},"__v":0
    
}

setNotes(notes.concat(note))
}

// get all notes
const getNotes=async ()=>{

// API CALL
    const response = await fetch(`${host}/api/notes/
    fetchallnotes`, {
        method: 'GET',
    
        headers: {
          'Content-Type': 'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjI4N2M5MTEwMjViYjYzYjMwNWZhIn0sImlhdCI6MTY0ODMwNjMwMH0.5SdC_wGOSToMo5EnrdSBqdirfDLQ-DAaoBaGJfkYZRA"
     
        },
       
      });

      const json=await response.json();

      console.log(json)
      setNotes(json);
}
// delete a note
const deleteNote=(id)=>{
    console.log("Deleting " +id);
   const newNotes=notes.filter((note)=>{return note._id!==id})

setNotes(newNotes);
   
}
   

//edit a note
const editNote=async(id,title,description,tag)=>{
    //API Calls

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',
    
        headers: {
          'Content-Type': 'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjI4N2M5MTEwMjViYjYzYjMwNWZhIn0sImlhdCI6MTY0ODMwNjMwMH0.5SdC_wGOSToMo5EnrdSBqdirfDLQ-DAaoBaGJfkYZRA"
     
        },
       
        body: JSON.stringify({title,description,tag}) 
      });

      const json=response.json();
    

    //login to edit in client

    for(let index=0;index<notes.length;index++){
        const element=notes[index];

        if(element._id===id){
            element.title=title;
            element.description=description;
            element.tag=tag;
        }
 
    }

}

    return (
      //  <NoteContext.Provider value={{state,update}}>
      <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
           {props.children} 
        </NoteContext.Provider>
    )
    }


export default NoteState;