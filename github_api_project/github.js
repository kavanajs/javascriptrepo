//restful---means using json object
//..load git apis.....
//communicate between localserver to github server
const api = "https://api.github.com/users";
window
.fetch(api)//retrieve api---built in method present in window
//if the status is pending,then use then() and catch() block----similar to try() and catch() block
.then(data => {
    //console.log(data);
    //converting response object to json object
    data.json().then(users => {
        //console.log(users);
        //print object ---here we use for of loop
        var output = [];
        for(let user of users) {
            //console.log(user);
            //console.log(user.login);
            
            output +=`
            <div class="container">
            <table class="table table-bordered mt-4">
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>repo</th>
                    <th>url</th>
                </tr>

                <tr>
                    <td>${user.id}</td>
                    <td>${user.login}</td>
                    <td><img style="width:100px;
                    height:100px;
                    border-radius:100%;" src="${user.avatar_url}"</td>
                    <td>${user.repos_url}</td>
                    <td>${user.url}</td>
                </tr>
            </table>
        </div>
            `;
            document.getElementById("template").innerHTML = output;
        }

    })
    .catch(err => console.log(err));
    
})
.catch(err => console.log(err));

//instead of fetch() we can use axios---is a library used it for fetching data---built with promises
