var Apps = {
  schema:true,
  attributes: {
    name: {type:"string",required:true},
    enable: {type:"boolean",defaultsTo: false},
    enabledate:{type:"date",required:true},
    disableddate:{type:"date",required:false},
    disabledmessage:{type:"string"},
    uri:{type:"string",required:true},
    usessl:{type:"boolean",defaultsTo: false},
    appcategoryid:{type:"string"}// app thuoc lai nao!
   }
};
module.exports = Apps;