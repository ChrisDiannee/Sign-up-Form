function isLogin(){
		let name = document.querySelector('#name').value;
		let password = document.querySelector('#password').value;
		let jns_parse = JSON.parse(localStorage.getItem('json_accounts'));
	

		if(name == jns_parse.name && password == jns_parse.password){
			let html = `
				<a href="/index"/>
			`;
		}
		else{
			alert("No account existed!");
		}
}


   function validate2(){
var name = document.getElementById("name").value;
var password = document.getElementById("password").value;
if ( name == "name1" && password == "password1"){
alert ("Login successfully");
  }
  else{
    alert("Invalid username or password");
    }
  return false;
  }