const { MongoClient, ObjectID } = require('mongodb')

const mongo_url = 'mongodb://localhost:27017'
MongoClient.connect(
	mongo_url,
	{ useNewUrlParser: true },
	(err, client) => {
		if (err) throw err
		const db = client.db('TodoApp')
		// db.collection('Todos')
		// 	.find({ _id: new ObjectID('5c39dad56feadf582f387295') })
		// 	.toArray()
		// 	.then(
		// 		docs => {
		// 			console.log('Todos============================')
		// 			console.log(JSON.stringify(docs, undefined, 2))
		// 		},
		// 		err => console.log('unable to fetch Todos')
		// 	)

		// db.collection('Todos')
		// 	.
		// 	.countDocuments({ completed: false })
		// 	.then(
		// 		count => {
		// 			console.log('Todos============================')
		// 			console.log(`You have ${count} uncompleted todos`)
		// 		},
		// 		err => console.log('unable to fetch Todos')
		// 	)

		db.collection('users')
			.find({ location: 'Casablanca' })
			.toArray()
			.then(
				docs => {
					console.log('Todos============================')
					console.log(JSON.stringify(docs, undefined, 2))
				},
				err => console.log('unable to fetch Todos')
			)

		client.close()
	}
)
