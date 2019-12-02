var employees = [
    {
        emp_id:"cap01",
        emp_name:"manu",
        emp_photo:"https://cdn.pixabay.com/photo/2018/02/01/17/09/man-3123561__340.jpg",
        emp_age: 20,
        emp_gender: "male",
        emp_company: "Capgemini",
        emp_salary: 30000,
        emp_designation: "web developer",
        emp_doj: new Date('2015/05/05'),
        emp_location: "mandya",
        emp_education: "BE"
    },
    {
        emp_id:"cap02",
        emp_name:"anu",
        emp_photo: "https://cdn.pixabay.com/photo/2013/11/21/12/20/woman-214786__340.jpg",
        emp_age: 21,
        emp_gender: "female",
        emp_company: "Wipro",
        emp_salary: 35000,
        emp_designation: "node developer",
        emp_doj: new Date('2019/09/15'),
        emp_location: "mysore",                                                                                                                                                                          
        emp_education: "BE"
    },
    {
        emp_id:"cap03",
        emp_name:"tanu",
        emp_photo: "https://cdn.pixabay.com/photo/2018/04/27/21/54/woman-3355952__340.jpg",
        emp_age: 22,
        emp_gender: "female",
        emp_company: "Capgemini",
        emp_salary: 30000,
        emp_designation: "java developer",
        emp_doj: new Date('2017/08/15'),
        emp_location: "mangalore",
        emp_education: "BE"
    },
    // {
    //     emp_id:"cap04",
    //     emp_name:"arun",
    //     emp_photo: "https://cdn.pixabay.com/photo/2015/08/05/06/43/college-875701__340.jpg",
    //     emp_age: 20,
    //     emp_gender: "male",
    //     emp_company: "Capgemini",
    //     emp_salary: 30000,
    //     emp_designation: "c++ developer",
    //     emp_doj: new Date('2016/06/25'),
    //     emp_location: "bangalore",
    //     emp_education: "BE"
    // },
    {
        emp_id:"cap05",
        emp_name:"anish",
        emp_photo: "https://cdn.pixabay.com/photo/2018/04/21/10/44/people-3338167__340.jpg",
        emp_age: 24,
        emp_gender: "male",
        emp_company: "Infosys",
        emp_salary: 30000,
        emp_designation: "angular developer",
        emp_doj: new Date('2019/06/15'),
        emp_location: "shimoga",
        emp_education: "BE"
    }
];

var emp = [];
employees.forEach(empData => {
    emp.push(`
    <div class="card">
    <img src="${empData.emp_photo}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${empData.emp_name}</h5>
    <span class = "badge badge-success float-right">${empData.emp_id}</span>
   <br>
    <span class = "badge badge-primary float-right">${empData.emp_designation}</span><br>
    <li class ="list-group-item"> Salary : ${empData.emp_salary}</li>
    <li class ="list-group-item"> Location : ${empData.emp_location}</li>
    <li class ="list-group-item"> Education : ${empData.emp_education}</li>
    <li class ="list-group-item"> Age : ${empData.emp_age}</li>
    <li class ="list-group-item"> Company : ${empData.emp_company}</li>
    <li class ="list-group-item"> Gender : ${empData.emp_gender}</li>
    <li class ="list-group-item"> Date of joining : ${empData.emp_doj.toString()}</li>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `);
    
});

document.getElementById('template').innerHTML = emp;//connecting html to js by using getElementById

