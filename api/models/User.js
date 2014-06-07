var User = {
  schema:true,
  attributes: {
    fullname: {type:"string",required:true},
    username:{type:"string",unique:true},
    phone:{type:"string",unique:true},
    email: {
      type: 'email', // Email type will get validated by the ORM
      unique:true
    },
    password:{
        type:"string",
        required:true
    },
    online:
    {type:"boolean",defaultsTo: false},
    groupid:'string'
   }
};
module.exports = User;