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

// $.post('file.php', {id: userId}, function(data){
// 	$(#userList).append('<li>'+data+'</li>');
// });

// $.ajax({
// 	type: "POST",
// 	url: "file.php"
// 	data: {id: userId},
// 	success: function(data){
// 		$(#userList).append('<li>'+data+'</li>');
// 	},
// 	error:(err) => {console.log(err)};
// });