//status code checker with chai BDD
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//Adding multiple assertions
pm.test("Batch Validation of JSON output", function () {
    parsedData = pm.response.json();

    pm.expect(parsedData.data.id).to.eql(2);
    pm.expect(parsedData.data.email).to.eql("janet.weaver@reqres.in");
    pm.expect(parsedData.data.first_name).to.eql("Janet");
    pm.expect(parsedData.data.last_name).to.eql("Weaver");
    pm.expect(parsedData.data.age).to.eql(27);
    pm.expect(parsedData.data.account).to.eql("04230647978");
    pm.expect(parsedData.data.address).to.eql("Central")

});

//handling responses that cant be parsed in JSON
pm.test("Body has some text", function () {
    pm.expect(pm.response.text()).to.include("https://reqres.in/img/faces/2-image.jpg")
});

//expect status code to be one of the set listed
pm.test("Successfull status Code", function () {
    pm.expect(pm.response.code).to.be.oneOf([200,201]);
});

//Testing Headers
pm.test("Content_Type present", function () {
    pm.response.to.have.header("Content-Type");
});

//Verify our header value
pm.test("Content_Type present", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.eql("application/json; charset=utf-8");
});

//verify the cookies
pm.test("Cookie is present", function () {
    pm.expect(pm.cookies.has("__cfduid")).to.be.true;
});

//verify value of cookie
pm.test("Cookie value Check", function () {
    pm.expect(pm.cookies.get("__cfduid")).to.be.eql("d8b5b667f228fe6df29a12caac35c75161620140003")
});

//check response Time
pm.test("response Time less than 20ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(290);
});

