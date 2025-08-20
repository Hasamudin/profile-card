let bgColorBtn = document.querySelectorAll('[data-bg-color]')
let textColorBtn = document.querySelectorAll('[data-text-color]')

bgColorBtn.forEach(btn=>{
    // console.log(btn.dataset.bgColor);
    btn.style.backgroundColor = btn.dataset.bgColor;
    btn.addEventListener("click", ()=>{
        document.documentElement.style.setProperty("--bg-color", btn.dataset.bgColor)
    })
})

textColorBtn.forEach(btn=>{
    console.log(btn);
    btn.style.backgroundColor = btn.dataset.textColor;
    btn.addEventListener("click", ()=>{
        document.documentElement.style.setProperty("--text-color", btn.dataset.textColor)
    })
})


