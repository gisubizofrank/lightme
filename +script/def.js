function findUser(users, input) {
    console.log(users);
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.name == input.name) {
            if (user.password == input.password) {
                logedIn(user)
                return true
            }
        }
    }
    return false
}


function fileReader(file) {
    if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
             account_img.src = reader.result
            new_member.image = reader.result
        }
    }
}

function logedIn(user) {
    popup.style.display = 'none'
    container.className = ''
    menu_btn.innerHTML = `
        <img id="logedin-image" src="${user.image}">
        <span id="logedin-name">${user.name}</span>
        <button onclick="openUpload()" id="menu_upload">Upload</button>
    `
    reader('welcome back ' + user.name)
}

function reader(text) {
    utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.cancel()
    speechSynthesis.speak(utterance)
}

function findPath() {
    let doc = document.querySelector('#upload iframe').contentWindow.document
    let wrapper = [...doc.querySelectorAll('#wrapper h1 a')]
    if (wrapper.length) {
        new_project.path = ''
        wrapper.forEach(a => {
            if (a.textContent != '~') {
                new_project.path += a.textContent+'/'
            }
        });
    } else {
        upload_filename.click()
        upload_filename.addEventListener('input', e => {
            new_project.path += e.target.files[0].name
            console.log(new_project);
        })
        clearInterval(path_interval)
    }
}

function showProducts() {
    project_cards = [...document.querySelectorAll('.project')]
    project_cards.forEach(card => {
        card.addEventListener('click', e => {
            iframe.src = card.getAttribute('name') 
            presenter.style.width = '77vw'
            presenter.style.padding = '20px'
            projects.style.width = '23vw'
        })
    });
}

function openUpload() {
    console.log('Sandrine');

    presenter.style.width = '0vw'
    presenter.style.padding = '0px'
    projects.style.width = '50vw'
    upload_page.style.width = '50vw'
    iframe.src = ''
}

function send_comment() {
    if (entry.value && entry.value.length <= 150) {
        comments.innerHTML += `
            <div class="comment">
                <img src="img/a4.jpg">
                <div class="text">
                    <p>${entry.value}</p>
                    <span class="name">consectetur</span>
                    <span class="date">
                        ${date.getDay()}/${date.getDate()}/${date.getFullYear()}
                    </span>
                </div>
            </div>
        `
    }
}