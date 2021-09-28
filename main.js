let icons = document.querySelector(".resumepage");
let actionWindow = document.querySelector(".actionWindow");
let forms = document.querySelector(".forms");
let column2 = document.querySelector(".column2");
let reset = document.querySelector(".buttons");
//

function clickIcon(e) {
  e.preventDefault();
  try {
    if (e.target.classList.contains("fa-edit")) {
      let classname = e.target.parentElement.classList[0];
      addInActionWindow(classname.trim());
    }
  } catch (error) {
    if (e.target.classList.contains("fa-edit")) {
      let classname = e.target.parentElement.parentElement.classList[0];
      addInActionWindow(classname.trim());
    }
  }

  if (e.target.classList.contains("column2addbtn")) {
    addBlock();
  }
}

function addInActionWindow(classname) {
  console.log(classname);
  actionWindow.children[1].classList.add("hidden");

  for (let i = 0; i < forms.children.length; i++) {
    if (forms.children[i].classList.contains(`${classname}`)) {
      forms.children[i].classList.toggle("hidden");
      if (forms.children[i].classList.contains("hidden")) {
        actionWindow.children[1].classList.remove("hidden");
      }
      forms.addEventListener("keyup", AccessChildren);
    } else {
      if (!forms.children[i].classList.contains("hidden")) {
        forms.children[i].classList.add("hidden");
      }
    }
  }
}

//Access Children to fire key up property
let obj = JSON.parse(localStorage.getItem("values")) || {};
function AccessChildren(e) {
  let name = e.target.name.trim();
  obj = { ...obj, [name]: e.target.value };
  localStorage.setItem("values", JSON.stringify(obj));
  //   let objtake=JSON.parse(localStorage.getItem("values"))
  let element = document.getElementById(name);
  element.textContent = e.target.value.trim();
}

//
//Add Block to UI then storing to local state
let str = JSON.parse(localStorage.getItem("block")) || " ";
let str3 = `<div class="interest">
<h3><span>INTEREST</span><i class="fas fa-edit"></i></h3>
<ul class="point">
  <li id="interest1">lorem</li>
  <li id="interest2">lorem</li>
  <li id="interest3">lorem</li>
  <li id="interest4">lorem</li>
</ul>
</div>`;
function addBlock() {
  showdata();

  // showdata();
  let id = Date.now();
  str += `<div class="data-id=${id} workexperience  ">
  <h3><span id="${
    id + 1
  }">WORK EXPERIENCE</span><i class="fas fa-edit"></i></h3>
  <div class="organisation point">
    <p id="${id + 2}">OzoneAI</p>
  </div>
  <div class="rolenYr">
    <div class="role point">Software Developer Intern</div>
    <div class="yr point">
      <div class="startyr" id="${id + 3}">2018</div>
      <div class="hyphen">-</div>
      <div class="endyr" id="${id + 4}">2019</div>
    </div>
  </div>
  <div class="points point">
    <ul>
      <li>
        <p id="${id + 5}">
          Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Ex quod repellat commodi obcaecati quasi nesciunt
          et illo quia dolore. Ab!
        </p>
      </li>
      <li>
        <p id="${id + 6}">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ex, in?
        </p>
      </li>
      <li >
      <p id="${
        id + 7
      }"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Distinctio minus, numquam consectetur ab placeat
      voluptatem? </p>
       
      </li>
    </ul>
  </div>
</div>
`;
  createForm(id);
  localStorage.setItem("block", JSON.stringify(str));
  column2.innerHTML = str + str3;
  for (let i = 0; i < forms.children.length; i++) {
    if (!forms.children[i].classList.contains("hidden")) {
      forms.children[i].classList.add("hidden");
    }
  }
  if (actionWindow.children[1].classList.contains("hidden")) {
    actionWindow.children[1].classList.remove("hidden");
  }
}

//Create Form

let str2 = `
<form  class="interest hidden">
            <div class="form-group">
              <label for="">Interest 1
            </label>
              <input type="text" name="interest1
              " placeholder="">
              
            </div>
            <div class="form-group">
              <label for="name">Interest 2
              </label>
              <input type="text" name="interest2" placeholder="e.g Olivia Wilson">
              
            </div>
            <div class="form-group">
              <label for="name">Interest 3
              </label>
              <input type="text" name="interest3" placeholder="e.g Olivia Wilson">
              
            </div>
            <div class="form-group">
              <label for="name">Interest 4
              </label>
              <input type="text" name="interest4" placeholder="e.g Olivia Wilson">
              
            </div>
            <button class="formbtn">Close Form</button>
            <!-- <button type="submit">Submit</button> -->
          </form>
          <form class="designation hidden">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" name="name" placeholder="e.g Olivia Wilson">
              
            </div>

            <div class="form-group">
              <label for="jobrole">Job Role</label>
              <input type="text" name="jobrole" placeholder="e.g Software Engineer">
            </div>

            <button class="formbtn">Close Form</button>
              <!-- <button type="submit">Submit</button> -->
          </form>
          <!-- designation form ends -->

          <form class="description  hidden">
            <div class="form-group">
              <label for="para">About Me</label>
              <input type="text" name="para" placeholder="e.g I am a full stack developer.">
            </div>
            <button class="formbtn">Close Form</button>
              <!-- <button type="submit">Submit</button> -->
          </form>
          <!-- description form ends -->
          
          <form class="contactInfo  hidden">
            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" name="address" placeholder="e.g 44A Kabi Sukanta Sarani,Kol-78" />
            </div>
    
            <div class="form-group">
              <label for="emailid">Email ID</label>
              <input type="text" name="emailid" placeholder="e.g oliwit@gmail.com" />
            </div>
    
            <div class="form-group">
              <label for="number">Phone Number</label>
              <input type="number" name="number" placeholder="e.g 80690 78965" />
            </div>
    
            <div class="form-group">
              <label for="gitlink">Personal Site or Github link</label>
              <input type="text" name="gitlink" placeholder="e.g github.com/oliwit" />
            </div>
             <button class="formbtn">Close Form</button>
            <!-- <button type="submit">Submit</button> -->
          </form>
          <!-- contact Info form ends -->

          <form class="education hidden ">
            <div class="form-group">
              <label for="startyr">Start year</label>
              <input type="text" name="startyr" placeholder="e.g 2001" />
            </div>
    
            <div class="form-group">
              <label for="endyr">End Year</label>
              <input type="text" name="endyr" placeholder="e.g 2005" />
            </div>
    
            <div class="form-group">
              <label for="university">University</label>
              <input type="text" name="university" placeholder="e.g Bekhingham University,UK" />
            </div>
    
            <div class="form-group">
              <label for="course">Course</label>
              <input type="text" name="course" placeholder="e.g B.Sc in Computer Science" />
            </div>

            
            
              <div class="form-group">
                <label for="startyr">Start year</label>
                <input type="text" name="startyr1" placeholder="e.g 2001" />
              </div>
      
              <div class="form-group">
                <label for="endyr">End Year</label>
                <input type="text" name="endyr1" placeholder="e.g 2005" />
              </div>
      
              <div class="form-group">
                <label for="university">University</label>
                <input type="text" name="university1" placeholder="e.g Bekhingham University,UK" />
              </div>
      
              <div class="form-group">
                <label for="course">Course</label>
                <input type="text" name="course1" placeholder="e.g B.Sc in Computer Science" />
              </div>
              <button class="formbtn">Close Form</button>
            <!-- <button>Add Block</button> -->
            <!-- <button type="submit">Submit</button> -->
          </form>
          <!-- education ends -->
          <form class="skills  hidden">
            <div class="form-group">
              <label for="skill1">Skill 1</label>
              <input type="text" name="skill1" placeholder="enter name" />
            </div>
            
            
            <div class="form-group">
              <label for="skill2">Skill 2</label>
              <input type="text" name="skill2" placeholder="enter name" />
            </div>
            

            <div class="form-group">
              <label for="skill3">Skill 3</label>
              <input type="text" name="skill3" placeholder="enter name" />
            </div>
            
            

            <div class="form-group">
              <label for="skill4">Skill 4</label>
              <input type="text" name="skill4" placeholder="enter name" />
            </div>
            
            

            <div class="form-group">
              <label for="skill5">Skill 5</label>
              <input type="text" name="skill5" placeholder="enter name" />
            </div>
            
            

            <div class="form-group">
              <label for="skill6">Skill 6</label>
              <input type="text" name="skill6" placeholder="enter name" />
            </div>
            <button  class="formbtn">Close Form</button>
            
            
          </form>
`;
str2 += JSON.parse(localStorage.getItem("form")) || " ";
function createForm(id) {
  str2 += `<form class="data-id=${id}  hidden  ">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" name="${id + 1}" placeholder="e.g  Experience" />
    </div>

    <div class="form-group">
      <label for="organisation">Organisation/Project Title</label>
      <input type="text" name="${id + 2}" placeholder="e.g OzoneAI" />
    </div>

    <div class="form-group">
      <label for="startyr">Start year</label>
      <input type="text" name="${id + 3}" placeholder="e.g 2001" />
    </div>

    <div class="form-group">
      <label for="endyr">End Year</label>
      <input type="text" name="${id + 4}" placeholder="e.g 2005" />
    </div>

     

         <div class="form-group">
      <label for="points">Point 1</label>
      <input type="text" name="${id + 5}" placeholder="" />
    </div>
    <div class="form-group">
      <label for="points">Point 2</label>
      <input type="text" name="${id + 6}" placeholder="" />
    </div>
    <div class="form-group">
      <label for="points">Point 3</label>
      <input type="text" name="${id + 7}" placeholder="" />
    </div>
     <button>Delete Block</button>
     <button class="titlebtn">Add Block</button>
    
  </form>`;
  localStorage.setItem("form", JSON.stringify(str2));
  forms.innerHTML = str2;
}

function showdata() {
  let key = Object.keys(obj);
  column2.innerHTML = JSON.parse(localStorage.getItem("block"));
  // column2.innerHTML += str3;
  // if()
  // forms.innerHTML = JSON.parse(localStorage.getItem("form"));
  key.forEach((item) => {
    let element = document.getElementById(item);
    element.innerHTML = obj[item];

    // localStorage.setItem("block",JSON.stringify(column2.innerHTML))
  });
  str = column2.innerHTML;
  column2.innerHTML += str3;
}

showdata();

function resetPage(e) {
  if (e.target.classList.contains("reset")) {
    localStorage.setItem("values", JSON.stringify({}));
    localStorage.setItem("values", JSON.stringify({}));
    localStorage.setItem("block", JSON.stringify(" "));
    localStorage.setItem("form", JSON.stringify(" "));
    window.location.reload();
  }
}

//To close form
function closeForm(e) {
  e.preventDefault();
  if (e.target.classList.contains("formbtn")) {
    e.target.parentElement.classList.add("hidden");

    actionWindow.children[1].classList.toggle("hidden");
  }

  if (e.target.classList.contains("titlebtn")) {
    addMoreToTitle(e);
  }
}

//Adding more thing to titl
let variable = localStorage.getItem("id-value") || 7;
let variable1 = localStorage.getItem("id-value1") || 7;

// resetPage()
//Event Listener
icons.addEventListener("click", clickIcon);
reset.addEventListener("click", resetPage);
forms.addEventListener("click", closeForm);

function addMoreToTitle(e) {
  console.log(e.target.parentElement.classList[0]);
  let formname = e.target.parentElement.classList[0].trim();
  console.log(formname);
  let id = Number(formname.substring(8));
  console.log(id);
  let currForm = document.querySelector(`.forms `);
  let idd = Date.now();
  //   let column=document.querySelector(`.column2`);
  console.log(currForm.children);
  let x = document.getElementsByClassName(`${formname}`);
  console.log(x);

  x[0].innerHTML += `

  <div class="form-group">
    <label for="organisation">Organisation/Project Title</label>
    <input type="text" name="${idd + 1}" placeholder="e.g OzoneAI" />
  </div>

  <div class="form-group">
    <label for="startyr">Start year</label>
    <input type="text" name="${idd + 2}" placeholder="e.g 2001" />
  </div>

  <div class="form-group">
    <label for="endyr">End Year</label>
    <input type="text" name="${idd + 3}" placeholder="e.g 2005" />
  </div>

       <div class="form-group">
    <label for="points">Point 1</label>
    <input type="text" name="${idd + 4}" placeholder="" />
  </div>
  <div class="form-group">
    <label for="points">Point 2</label>
    <input type="text" name="${idd + 5}" placeholder="" />
  </div>
  <div class="form-group">
    <label for="points">Point 3</label>
    <input type="text" name="${idd + 6}" placeholder="" />
  </div>
   <button>Delete Block</button>`;
  // }
  // for (let i = 0; i < column2.children.length; i++) {
  // if (column2.children[i].classList.contains(`${formname}`)) {
  x[1].innerHTML += `<div class="organisation point">
        <p id="${idd + 1}">OzoneAI</p>
      </div>
      <div class="rolenYr">
        <div class="role point">Software Developer Intern</div>
        <div class="yr point">
          <div class="startyr" id="${idd + 2}">2018</div>
          <div class="hyphen">-</div>
          <div class="endyr" id="${idd + 3}">2019</div>
        </div>
      </div>
      <div class="points point">
        <ul>
          <li>
            <p id="${idd + 4}">
              Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ex quod repellat commodi obcaecati quasi nesciunt
              et illo quia dolore. Ab!
            </p>
          </li>
          <li>
            <p id="${idd + 5}">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ex, in?
            </p>
          </li>
          <li >
          <p id="${
            idd + 6
          }"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Distinctio minus, numquam consectetur ab placeat
          voluptatem? </p>

          </li>
        </ul>
      </div>`;
  console.log(x[0]);
  console.log(x[1]);
  console.log(forms.innerHTML);
  str2 = forms.innerHTML;
  localStorage.setItem("block", JSON.stringify(column2.innerHTML));
  localStorage.setItem("form", JSON.stringify(forms.innerHTML));

  if (!actionWindow.children[1].classList.contains("hidden")) {
    actionWindow.children[1].classList.add("hidden");
  }
  // showdata();
}