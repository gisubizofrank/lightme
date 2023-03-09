account.addEventListener('click', e => {
    if (popup.style.display == 'none') {
        container.className = 'blur'
        popup.style.display = 'flex'
    } else {
        container.className = ''
        popup.style.display = 'none'
    }
})

form_inputs.forEach(input => {
    input.addEventListener('input', e => {
        if (e.target.id == 'user-name') {
            if(e.target.value.trim().length >2){
                new_member.name = e.target.value
            }else{
                new_member.name = ''
            }
        }
        if (e.target.id == 'password') {  
            if(e.target.value.trim().length > 4){
                new_member.password = e.target.value
            }else{
                new_member.password = ''
                
            }
        }
        if (e.target.id == 'email') {
            if (e.target.value.match(/^.+@(gmail).com$/)) {
                new_member.email = e.target.value
            }else{
                new_member.email = ''
            }
        }
        if (e.target.className == 'date') {
            if (
                new_member.image != '' &&
                form_inputs[4].value <= 31 &&
                form_inputs[4].value > 0 &&
                form_inputs[5].value <= 12 &&
                form_inputs[5].value > 0 &&
                form_inputs[6].value <= 2020 &&
                form_inputs[6].value.length == 4
            ){
                new_member.birth = `${form_inputs[4].value}/${form_inputs[5].value}/${form_inputs[6].value}`
            }else{
                new_member.birth = ''
            }
        }
        if (new_member.name != '' && new_member.password != '' && new_member.email != '' && new_member.birth != '' && new_member.gender != '') {
            data.push(new_member)
            localStorage.setItem('Users', JSON.stringify(data));
            logedIn(new_member)
            console.log(new_member);
            console.log(data);
        }
        findUser(data, new_member)
    })
})

// submit.addEventListener('click', e => {
//     if (findEmail(data, new_member)) {
        
//     } else {
//         if (popup1.style.display == 'none') {
//             popup.style.display = 'none'
//             popup1.style.display = 'flex'
//         }
//     }
// })

account_img_input.addEventListener('change', e => {
    fileReader(e.target.files[0])
})

no.addEventListener('click', e =>{
    form.style.height = 'auto'
    no.style.display = 'none'
    account_img.style.display = 'flex'
    back.style.display = 'flex'
})
back.addEventListener('click', e =>{
    form.style.height = '157px'
    no.style.display = 'flex'
    account_img.style.display = 'none'
    back.style.display = 'none'
})

account_img.onclick = () => {account_img_input.click()}

// addEventListener('keydown', e => {
//     if (e.key == 'f') {
//         if (iframe.className == 'full') {
//             iframe.className = ''
//         } else {
//             iframe.className = 'full'
//         }
//     }
// })
radios[0].addEventListener('click', e =>{
    radios[0].children[0].classList.add('checked')
    radios[1].children[0].classList.remove('checked')
    new_member.gender = 'male'
})
radios[1].addEventListener('click', e =>{
    radios[1].children[0].classList.add('checked')
    radios[0].children[0].classList.remove('checked')
    new_member.gender = 'female'
})

addEventListener('load', e => {
    if (JSON.parse(localStorage.getItem("Users"))) {
        data = JSON.parse(localStorage.getItem("Users"));
    }
    showProducts()
})

iframe.onload = function () {
    presenter.style.background = 'transparent'
    loader.style.display = 'none'
}

no_presenter.addEventListener('click', e => {
    presenter.style.width = '0vw'
    presenter.style.padding = '0px'
    projects.style.width = '100vw'
    iframe.src = ''
})

upload_image[0].addEventListener('click', e => {
    upload_image[1].click()
    console.log(upload_image);
})

upload_image[1].addEventListener('input', e => {
    let file = e.target.files[0]
    if (file.type.startsWith("image/")) {
        const img = new FileReader()
        img.readAsDataURL(file)
        img.onload = () => {
            new_project.image = img.result
            upload_image[2].src = img.result
        }
    }
})

upload_description.addEventListener('input', e => {
    new_project.description = e.target.value
    console.log(new_project);
})

upload_project_btn.addEventListener('click', e => {
    project_cards[0].parentNode.innerHTML += `
        <div class="project" name="./${new_project.path}">
            <img src="${new_project.image}" alt="">
            <div class="propaties">
                <img src="/grunt.png">
                <span>visits: 2</span>
                <span>🧡: 1</span>
            </div>
            <p>${new_project.description}</p>
        </div>    
    `
    showProducts()
    console.log(new_project);
})

send_btn.onclick = send_comment