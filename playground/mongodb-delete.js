const { MongoClient, ObjectID } = require('mongodb')

const mongo_url = 'mongodb://localhost:27017'
MongoClient.connect(
	mongo_url,
	{ useNewUrlParser: true },
	(err, client) => {
		if (err) throw err
		const db = client.db('TodoApp')
		// let arr = []
		// db.collection('Todos')
		// 	.find({ text: 'run' })
		// 	.toArray()
		// 	.then(
		// 		docs => {
		// 			console.log('Todos============================')
		// 			console.log(JSON.stringify(docs[0], undefined, 2))
		// 			arr = docs[0]
		// 			console.log(arr)
		// 		},
		// 		err => console.log('unable to fetch Todos')
		// 	)

		try {
			db.collection('Todos').deleteMany({
				text: 'run'
			})
		} catch (e) {
			console.log(e)
		}
		// console.log(arr)
		// db.collection('Todos').insertOne(
		// 	{
		// 		text: arr.text,
		// 		completed: arr.completed,
		// 		_id: new ObjectID(arr._id)
		// 	},
		// 	(err, result) => {
		// 		if (err) throw err
		// 		console.log(arr)
		// 		console.log('reinsert one', JSON.stringify(result.ops, undefined, 2))
		// 	}
		// )

		client.close()
	}
)
