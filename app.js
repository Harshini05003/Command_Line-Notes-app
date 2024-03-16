const yargs= require('yargs');
const notes=require('./notes')
//Add Note
yargs.command({
    command:'add',
    describe:"Add a note",
    builder:{
        title:{
           describe:"Title of notes",
           demandOption:true,
           type:'string'
        },
        content:{
           describe:"Content of notes",
           demandOption:true,
           type:'string'
        }
    },
    handler(argv){
      notes.addNote(argv.title,argv.content)
    }
})
//To remove a note
yargs.command({
    command:'remove',
    describe:"Remove a note",
    builder:{
        title:{
            describe:"Title of the note that need to be removed",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
      notes.removeNote(argv.title);
    }
})
//To list the notes
yargs.command({
    command:"list",
    describe:"List out the notes",
    handler(){
      notes.listNotes();
    }
})
//To read notes
yargs.command({
    command:'read',
    describe:"Read the note",
    builder:{
        title:{
            describe:"title of the note that need to be read",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
      notes.readNotes(argv.title);
    }
})
yargs.parse();