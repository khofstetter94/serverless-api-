const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

const peopleModel = dynamoose.model('people-lab18', peopleSchema)

exports.handler = async (event, a, b) => {
    // TODO implement

    console.log('----------', event.pathParameters.id);
    const response = {statusCode: null, body: null};
    try{
      let peopleRecords = await peopleModel.scan().exec();
      let person = await peopleModel.scan("id").contains(event.pathParameters.id).exec()
      console.log(person);
      response.statusCode = 200;
      // console.log(peopleRecords);
      response.body = JSON.stringify(person);

    } catch (e) {
      console.log(e);
      response.statusCode = 500;
      response.body = JSON.stringify(e.message);
    }
    return response;
};
