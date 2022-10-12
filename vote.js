var request = require("request");

async function view() {
    var options = {
        method: "POST",
        url: "https://23ahurhr66.execute-api.ap-southeast-1.amazonaws.com/Dev/submission-view-details",
        headers: {
            Accept: "application/json, text/plain, */*",
            Authorization: "NO_AUTHENTICATION_V1",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            submission_id:
                "1660557617366-6b80b717-f85a-4bea-8295-cfcd1b49f97a-c1d8dd46-0bb2-4dd7-ab46-a1d67d8f8a0d",
        }),
    };

        await request(options, function (error, response) {
            if(error) {console.error(error)}
            else console.log(Date(), " View: ",response.statusCode);
        });
    
    
}

async function vote(id){
    var options = {
        'method': 'POST',
        'url': 'https://qq9xyruh34.execute-api.ap-southeast-1.amazonaws.com/Dev/submission-nl-vote',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'NO_AUTHENTICATION_V1',
          'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify({
          "email": id,
          "user_id": id,
          "submission_id": "1660557617366-6b80b717-f85a-4bea-8295-cfcd1b49f97a-c1d8dd46-0bb2-4dd7-ab46-a1d67d8f8a0d"
        })
      
      };
     await request(options, function (error, response) {
        if(error) {console.error(error)}
        else console.log(Date()," Vote: ",response.statusCode);
      });
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

async function run(){
  view()
    if((Math.floor(Math.random()*100) % 2 == 0)){
        await sleep(100+Math.floor(Math.random()*100))
        vote((new Date().getTime()+Math.floor(Math.random()*100)).toString())
    }
    await sleep(100+Math.floor(Math.random()*100))
}

setInterval(run(),500)