var conString = "postgres://postgres:NHLsurvivor@localhost:5432/postgres";
var client = new pg.Client(conString);

client.connect();

function search(){
	var query = client.query("SELECT * FROM \"Monstre Donjon\"");

	query.on('row', function(row) {
		console.log(row)
		return row;
	});
};

function quit(){
	query.on('end', function() {
		client.end();
	});
};