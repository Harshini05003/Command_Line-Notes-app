const fs=require('fs');
const chalk=require("chalk");
//
const addNote=(title,content)=>{
  const notes=loadNotes();
  const duplicateValues=checkNotes(notes,title);
  if(duplicateValues.length===0){
    notes.push({
        "title":title,
        "content":content
      })
      saveNotes(notes);
      console.log(chalk.green("Notes added successfully!!"));
  }
  else{
    console.log(chalk.red("Title is already there"));
  }
}
const loadNotes=()=>{
  try{
    const dataBuffer=fs.readFileSync('notes.json');
    LoadedData=dataBuffer.toString();
    return JSON.parse(LoadedData);
  }
  catch(err){
    return [];
  }
}
const saveNotes=(notes)=>{
  fs.writeFileSync('notes.json',JSON.stringify(notes));
}
const checkNotes=(notes,title)=>{
  return duplicates= notes.filter((value)=>{
    return (value.title===title);
  })
  
}
//
const removeNote=(title)=>{
  const notes=loadNotes();
  const notesData=remainingNotes(notes,title);
  if(notes.length===notesData.length){
    console.log(chalk.red.inverse(`Note with Title '${title}' not presented.`))
  }
  else{
    saveNotes(notesData);
    console.log(chalk.green.inverse(`Note with Title '${title}' removed successfully.`))
  }
  
}
const remainingNotes=(notes,title)=>{
  return rem=notes.filter((value)=>{
    return (value.title!=title)
  })
 
}
//
const listNotes=()=>{
    console.log(chalk.yellow("Your Notes..."))
    const notes=loadNotes();
    notes.forEach((value)=>{
        console.log(chalk.green(value.title));
    })
}
// 
const readNotes=(title)=>{
    const notes=loadNotes();
    const readableNote=findNote(notes,title);
    if(readableNote){
        console.log(chalk.inverse(title));
        console.log(chalk.blue(readableNote.content));
    }
    else{
        console.log(chalk.red.inverse(`Note with Title '${title}' not presented.`))
    }
}
const findNote=(notes,title)=>{
  return notes.find((value)=>{
    return value.title===title;
  })
}
module.exports={
  addNote,
  removeNote,
  listNotes,
  readNotes
}