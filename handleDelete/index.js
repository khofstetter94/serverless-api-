const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

const peopleModel = dynamoose.model('people-lab18', peopleSchema)

exports.handler = async (event) => {
    // TODO implement

    console.log('----------', event.pathParameters.id);
    const response = {statusCode: null, body: null};
    const Person = dynamoose.model("people-lab18", {"id": Number, "name": String});
    try {
      await Person.delete(event.pathParameters.id);
      console.log("Successfully deleted item");
      response.statusCode = 200;
      response.body = 'Person deleted!';
    } catch (error) {
      console.error(error);
    }
    return response;
};
