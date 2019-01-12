const { MongoClient, ObjectID } = require('mongodb')

// const obj = new ObjectID()
// console.log(obj)

const mongo_url = 'mongodb://localhost:27017'
MongoClient.connect(
	mongo_url,
	{ useNewUrlParser: true },
	(err, client) => {
		if (err) throw err
		const db = client.db('TodoApp')
		// db.collection('users').insertOne(
		// 	{
		// 		name: 'Kamal',
		// 		age: 15,
		// 		location: 'Rabat'
		// 	},
		// 	(err, result) => {
		// 		if (err) throw err
		// 		console.log('Document added', JSON.stringify(result.ops, undefined, 2))
		// 	}
		// )
		client.close()
	}
)
