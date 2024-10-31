let counter = 0
let page_displayed = 2
const MIN_PAGE = 0
const MAX_PAGE = 7

function create_image() {
    let images = {}
    let src = document.getElementsByClassName('reader')[0]
    for (let i = 1; i <= page_displayed; i++) {
        console.log(i)
        images[`img_${i}`] = document.createElement('img')
        images[`img_${i}`].src = `F4U-book/F4U-000${counter+i-1}.webp`
        images[`img_${i}`].className = `reader_img_${i}`
//        images[`img_${i}`].style.maxHeight = '100vh'
        src.appendChild(images[`img_${i}`])
    }
}

function set_image() {
    let images = {}
    for (let i = 1; i <= page_displayed; i++) {
        images[`img_${i}`] = document.getElementsByClassName(`reader_img_${i}`)[0]
        images[`img_${i}`].src = `F4U-book/F4U-000${counter+i-1}.webp`
    }
}

function prev_page() {
    if (counter > MIN_PAGE) {
        counter -= 2
        set_image()
    }
    console.log(counter)
}

function next_page() {
    if (counter < MAX_PAGE-1) {
        counter += 2
        set_image()
    }
}

create_image()