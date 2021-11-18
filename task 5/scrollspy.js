
let home=document.querySelector("#home");
let cricket=document.querySelector("#cricket");
let file_upload=document.querySelector("#file_upload");
let overlay=document.querySelector("#overlay");
let fourth=document.querySelector("#fourth");

window.addEventListener("scroll",()=> {
    var win=window.pageYOffset;
    if(cricket.offsetTop <= win && file_upload.offsetTop > win)
    {
        
        document.querySelector(".cricket").setAttribute("id","active");
        document.querySelector(".file_upload").removeAttribute("id","active");
        document.querySelector(".overlay").removeAttribute("id","active");
        document.querySelector(".fourth").removeAttribute("id","active");
        document.querySelector(".home").removeAttribute("id","active");
    }
    else if(file_upload.offsetTop <= win && overlay.offsetTop > win)
    {
        
        document.querySelector(".file_uplpoad").setAttribute("id","active");
        document.querySelector(".cricket").removeAttribute("id","active");
        document.querySelector(".overlay").removeAttribute("id","active");
        document.querySelector(".fourth").removeAttribute("id","active");
        document.querySelector(".home").removeAttribute("id","active");
    }
    else if(overlay.offsetTop <= win && fourth.offsetTop > win)
    {
    
        document.querySelector(".overlay").setAttribute("id","active");
        document.querySelector(".file_upload").removeAttribute("id","active");
        document.querySelector(".cricket").removeAttribute("id","active");
        document.querySelector(".fourth").removeAttribute("id","active");
        document.querySelector(".home").removeAttribute("id","active");
    }
    else if(fourth.offsetTop <= win)
    {
        
        document.querySelector(".fourth").setAttribute("id","active");
        document.querySelector(".file_upload").removeAttribute("id","active");
        document.querySelector(".overlay").removeAttribute("id","active");
        document.querySelector(".cricket").removeAttribute("id","active");
        document.querySelector(".home").removeAttribute("id","active");
    }
    else{
        
        document.querySelector(".home").setAttribute("id","active");
        document.querySelector(".file_upload").removeAttribute("id","active");
        document.querySelector(".overlay").removeAttribute("id","active");
        document.querySelector(".fourth").removeAttribute("id","active");
        document.querySelector(".cricket").removeAttribute("id","active");
    }

});

//image uploader

const image_input=document.querySelector("#image_input");
var upload_image = "";
image_input.addEventListener('change', function(){
    const img_reader= new FileReader();
    img_reader.addEventListener("load",() => {
        upload_image=img_reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${upload_image})`;
    });
    img_reader.readAsDataURL(this.files[0]);
})
//overlay

function toggleup()
{
    document.getElementById("popup-1").classList.toggle("active");
}

//pagenation

const image_container = document.getElementById("page1");
const img_list = [
    {
        id:1,
        name:"Virat",
        url:"images/virat.jpeg"
    },
    { 
        id:2,
        name:"Dhoni",
        url:"images/dhoni.jpg"
    },
    {
        id:3,
        name:"Kl rahul",
        url:"images/kl.jpg"
    },
    {
        id:4,
        name:"Pant",
        url:"images/pant.jpg"
    },
    {
        id:5,
        name:"Rohit",
        url:"images/rohit.jpeg"
    },
    {
        id:6,
        name:"Samson",
        url:"images/samson.jpg"
    },
    {
        id:7,
        name:"Kane Williomson",
        url:"images/kane.jpg"
    },
    {
        id:8,
        name:"Dinesh Karthik",
        url:"images/dk.jpg"
    },
    {
        id:9,
        name:"ABD",
        url:"images/abd.jpg"
    },
    {
        id:10,
        name:"Sky",
        url:"images/sky.jpg"
    },
    {
        id:11,
        name:"Jadeja",
        url:"images/jadu.jpg"
    },
    {
        id:12,
        name:"Sachin",
        url:"images/sachin.jpg"
    }
];

function store()
{
    const items = img_list;
    writeData(items);
}
function writeData(items) {

    items.forEach(item => {
      const li = document.createElement('div');
      li.className = "temp"
      li.innerHTML = 
      `<div id="picture1" class="picture" name=${item.name}>
      <h2 class="img">${item.name}</h2>
      <img src=${item.url} alt="Lamp" width="70%" style="border-radius:10" height="180" />
      </div>`
      image_container.appendChild(li);
    })
  }
  store();


  const gallery = document.querySelector(".page").children;
  const prev= document.querySelector(".prev");
  const count = document.querySelector(".count_num");
  const next = document.querySelector(".next");
  const maxItem=3;
  let index=1;

  const pagination=Math.ceil(gallery.length/maxItem);
  

  prev.addEventListener('click',function(){
      index--;
      check();
      showItems();
  })
  next.addEventListener('click',function(){
    index++;
    check();
    showItems();
})

  function check()
  {
      if(index==pagination){
          next.classList.add("disabled");
      }
      else
      {
        next.classList.remove("disabled");
      }
      if(index==1)
      {
          prev.classList.add("disabled");
      }
      else{
          prev.classList.remove("disabled");
      }
  }

  function showItems() {
      for(let i=0;i<gallery.length;i++)
      {
        gallery[i].classList.remove("show");
        gallery[i].classList.add("hide");

        if(i>=(index*maxItem)-maxItem && i<index*maxItem){
            gallery[i].classList.remove("hide");
            gallery[i].classList.add("show");
        }
        count.innerHTML=index;
      }

  }
  window.onload = function(){
      showItems();
      check();
  }


  
