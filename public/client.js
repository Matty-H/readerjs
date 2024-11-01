let counter = 0
let page_displayed = 2
const MIN_PAGE = 0
const MAX_PAGE = 7

let src = document.getElementsByClassName('reader')[0]

function generate_page() {
    let images = {}
    for (let i = 1; i <= page_displayed; i++) {
        create_image(images[`img_${i}`], `F4U-book/F4U-000${counter+i-1}.webp`, `reader_img_${i}`, '100vmin', '100vmin')
    }
}

function create_image(image, source, divname, tall, large) {
    image = document.createElement('img')
    image.src = source
    image.className = divname
    set_size_image(image, tall, large)
    src.appendChild(image)
}

function set_size_image(image, tall, large) {
    image.style.maxHeight = tall
    image.style.maxWidth = large
    image.style.objectFit = 'contain'
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
}

function next_page() {
    if (counter < MAX_PAGE-1) {
        counter += 2
        set_image()
    }
}

function page_display() {
    let img = document.getElementsByClassName(`reader_img_2`)[0]
    
    if (!img) {
        create_image(img, `F4U-book/F4U-000${counter+1}.webp`, 'reader_img_2', '100vmin', '100vmin')
    }
    else {
        src.removeChild(img)
    }
}

generate_page()