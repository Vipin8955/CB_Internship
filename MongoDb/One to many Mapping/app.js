db.teachers.insertMany([
  {
    _id: ObjectId("649bec1753511cb45390fe01"),
    name: 'Kartik',
    subject: 'Web Development'
  },
  {
    _id: ObjectId("649bec1753511cb45390fe02"),
    name: 'Monu',
    subject: 'Java'
  },
  {
    _id: ObjectId("649bec1753511cb45390fe03"),
    name: 'Mosina',
    subject: 'C++'
  },
  {
    _id: ObjectId("649bec1753511cb45390fe04"),
    name: 'Varun',
    subject: 'Data Science'
  }
])
db.products.insertMany([
  {
    _id: ObjectId("649bec1753511cb45390fe01"),
    name: 'Kartik',
    subject: 'Web Development',
    productId: ObjectId("649be80853511cb45390fdfd")
  },
  {
    _id: ObjectId("649bec1753511cb45390fe02"),
    name: 'Monu',
    subject: 'Java',
    productId: ObjectId("649be80853511cb45390fdfe")
  },
  {
    _id: ObjectId("649bec1753511cb45390fe03"),
    name: 'Mosina',
    subject: 'C++',
    productId: ObjectId("649be80853511cb45390fdff")
  },
  {
    _id: ObjectId("649bec1753511cb45390fe04"),
    name: 'Varun',
    subject: 'Data Science',
    productId: ObjectId("649be80853511cb45390fe00")
  }
])
db.teachers.updateOne({
    {
    _id: ObjectId('649bec1753511cb45390fe01')
    },
{
    $set:{
        productIds:[
             ObjectId('649bec1753511cb45390fe01'),
             ObjectId('649bec1753511cb45390fe02')
        ]
     }
}
})


db.teachers.updateOne(
    {
    _id: ObjectId("649bec1753511cb45390fe02")
    },
{
    $set:{
        productIds:[
             ObjectId('649bec1753511cb45390fe03'),
              ObjectId('649bec1753511cb45390fe04')
        ]
     }
}
)

db.teachers.aggregate({
  $lookup:{
    from:'products',
    localField:'productIds',
    foreignField:'_id',
    as:'ProductDetails'
  }
})