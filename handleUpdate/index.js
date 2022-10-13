const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

const peopleModel = dynamoose.model('people-lab18', peopleSchema)

exports.handler = async (event) => {
    // TODO implement

    // console.log('----------', event.pathParameters.id);
    const response = {statusCode: null, body: null};
    const Person = dynamoose.model("people-lab18", {"id": String, "name": String, "phone": String});
    // console.log(Person);
    const request = JSON.parse(event.body);
    console.log(request);
    try {
      const { id, ...data } = request;
      const result = await Person.update({ id }, { ...data });
      console.log(result);
      console.log("Successfully updated item");
      response.statusCode = 200;
      response.body = result;
    } catch (error) {
      console.error(error);
    }
    return response;
};
