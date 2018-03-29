
var userStorage = (function(){
    function User (fName,sName,username,password,email){
        Object.defineProperty(this,"fName",{
            enumerable:true,
            writable:false,
            configurable:false,
            value:fName
        })
        // this.fName = fName;
        Object.defineProperty(this,"sName",{
            enumerable:true,
            writable:false,
            configurable:false,
            value:sName
        })
        //this.sName = sName;
        this.username = username;
        this.password = password;
        this.email = email;
      
    }
    
    function UserStorage () {
         if(localStorage.getItem("users") != null){
             this.users = JSON.parse(localStorage.getItem("users"));   
         } else {
            this.users = [];
            this.users.push(new User("Ivan","Ivanov","vankata94","ivan123","ivan@abv.bg"));
            this.users.push(new User("Ivan","Ivanov","vankata21","ivan123","ivan3@abv.bg"))   
        }
    }
    
    
    UserStorage.prototype.registerUser = function (firstName, secoundName,username,password,email) {
        if((typeof firstName == "string") && (firstName.length > 2) && (/^[A-Z]/.test(firstName))){
            if((typeof secoundName == "string") && (secoundName.length > 2) && (/^[A-Z]/.test(secoundName) == true)){
                if((typeof username == "string") && (username.length > 4)){
                    var findUser = this.users.find(function(user){ return user.username == username});
                        if(findUser != null) { 
                            alert("Тhere is such a username. Please enter again!");
                            return;
                            }
                    if((typeof password == "string") && (password.length > 4)){
                        if((typeof email == "string") && (email.length > 4)){
                            var findEmail = this.users.find(function(user){ return user.email == email});
                            if(findEmail != null){
                                alert("Тhere is such an email addres ");
                                return;
                            }
                            var newUser = new User(firstName,secoundName,username,password,email);
                            this.users.push(newUser);
                            localStorage.setItem("users", JSON.stringify(this.users));
                            return true;
                        } else {
                            alert("Invalid email. Please enter, again!")
                            return;
                        }
                    } else {
                        alert("Invalid password. Please enter, again!");
                        return;
                    }
                } else {
                    alert("Invalid username. Please enter, again!");
                    return;
                }
            } else {
                alert("Invalid secound name. Please enter, again!");
                return;
            }
        } else {
            alert("Invalid first name. Please enter, again!")
            return;
        }
    }
    
    UserStorage.prototype.loginUser = function (username , password) {
        if(((typeof username == "string") && (username.length > 0)) && ((typeof password == "string") && (password.length > 0))){
            var findUser = this.users.findIndex(function(user){
                return user.username == username && user.password == password;
            })
            console.log(findUser);
            if(findUser >= 0){
                console.log("okkk") 
                localStorage.setItem("users", JSON.stringify(this.users));
                return true;
            } else {
                // alert("Try Again")
                return false;
            }
        } else {
           
        }
    }
    return new UserStorage();
})();
