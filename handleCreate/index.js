const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

const peopleModel = dynamoose.model('people-lab18', peopleSchema)

exports.handler = async (event) => {
    console.log('------------', event.body);
    let parsedBody = JSON.parse(event.body);
    let { id, name, phone} = parsedBody;

    let people = {id, name, phone}
    console.log('------------', people);

    const response = {statusCode: null, body: null};
    try{
      let newPeople = await peopleModel.create(people)
      response.statusCode = 200;
      response.body = JSON.stringify(newPeople);

    } catch (e) {
      console.log(e);
      response.statusCode = 500;
      response.body = JSON.stringify(e.message);
    }

    return response;
};
