const messageCommands = {
  create: (commandName,commandFunction,...args)=>{
    this[commandName]=commandFunction(args)
  }
}