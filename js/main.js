let product = document.getElementsByClassName('product');
let getDelivere = document.getElementsByClassName('coffebg');
const tap = document.getElementsByClassName('tap')[0];
const heroSection = document.getElementsByClassName('hero-section')[0];
let sections = document.getElementsByTagName('section');
const loader = document.getElementsByClassName('loader')[0];
const footer = document.getElementsByTagName('footer')[0];
const menu = document.getElementById("menu");
const right = document.getElementById("right");
const navContant = document.getElementsByClassName('nav-contant')[0];

product= Array.from(product);
getDelivere= Array.from(getDelivere);
console.log(getDelivere);
sections = Array.from(sections);


console.log(sections);

product.forEach((x , i)=>{
    console.log(x);
    x.addEventListener('click' , ()=>{
        product.forEach((p)=>{p.classList.remove('active')});
        x.classList.add('active');

        // for update the image 
        getDelivere.forEach((y)=>y.classList.add('hide'));
        getDelivere[i].classList.remove('hide');

        let num_distance= i*20 ;
        tap.style.top = num_distance+ '%';

    })
});

setTimeout(()=>{
    sections.forEach((s)=>{s.classList.remove('hide')});
    heroSection.classList.remove('hide');
    footer.classList.remove('hide');
    loader.classList.add('hide');
} , 3000);

// this for sidebar
var show = true;
menu.addEventListener('click' , function(){
    if(show)
    {
        show = false;
        right.style.right = 0;
        right.innerHTML = navContant.outerHTML;
        setTimeout(function(){
            menu.classList.add("toggle");
            menu.style.justifyContent = 'space-between';
        },300);
        let navItems = document.getElementsByClassName('nav-item');
        navItems = Array.from(navItems);
        navItems.forEach((x)=>{
            console.log(x);
            x.addEventListener('click' , ()=>{
                removeSid();})
            });
    }
    else{
        removeSid();
    }
});

function removeSid(){
    show = true;
        console.log(screen.width);
        if(screen.width < 576)
        {
            right.style.right = '-50%';
        }
        else if(screen.width <768)
        {
            right.style.right = '-40%';
        }
        else
        {
            right.style.right = '-30%';
        }
        setTimeout(function(){
            menu.classList.remove("toggle");
            menu.style.justifyContent = 'space-around';
        },700);
}
