import $ from "jquery";

console.log($);
$('h1').append("<h1>Товарищ</h1>");

let newUser = {
	name: "newUser",
	id: 888
}

// console.log($.ajax);

// $.get('file.php', function(data){
// 	$(#userList).append('<li>'+data+'</li>');
// });

// $.post('127.0.0.1/users', {id: userId}, function(data){
// 	$(#userList).append('<li>'+data+'</li>');
// });

$.ajax({
	type: "POST",
	url: "/users",
	data: newUser,
	success: (data) => {
		console.log(data);
		$('#userList').append(`<li> ${item.name} </li>`);
	},
	error:(err) => {
		console.log(err)
	}
});

