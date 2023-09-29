
let ctgry=document.querySelector('.catagory')
ctgry.onclick=function(e){
    e.preventDefault()
let x=document.getElementById('sidenav')
if(x.classList.contains('sidenav-active')){
    x.classList.remove('sidenav-active')
}
else{
    x.classList.add('sidenav-active')
}
}


let usr=document.querySelector('#userr')
usr.onclick=function(e){
    e.preventDefault()
let y=document.getElementById('user')
if(y.classList.contains('user-active')){
    y.classList.remove('user-active')
}
else{
    y.classList.add('user-active')
}
}

let shp=document.querySelector('#shopp')
shp.onclick=function(e){
    e.preventDefault()
let z=document.getElementById('shop')
 if(z.classList.contains('shop-active')){
    z.classList.remove('shop-active')
 }else{
    z.classList.add('shop-active')
 }


}
let cls=document.querySelector('#close')
cls.addEventListener('click', function(e){
    e.preventDefault()
    let z=document.getElementById('shop')
    if(!z.classList.contains('shop-active')){
       z.classList.add('shop-active')
    }else{
       z.classList.remove('shop-active')
    }
})

let mnu=document.querySelector('#menu')
mnu.onclick=function(e){
    e.preventDefault()
let d=document.getElementById('hamburger-menu')
 if(d.classList.contains('menu-active')){
    d.classList.remove('menu-active')
 }else{
    d.classList.add('menu-active')
 }
}
let clse=document.querySelector('#clse')
clse.addEventListener('click', function(e){
    e.preventDefault()
    let d=document.getElementById('hamburger-menu')
    if(!d.classList.contains('menu-active')){
       d.classList.add('menu-active')
    }else{
       d.classList.remove('menu-active')
    }
})
