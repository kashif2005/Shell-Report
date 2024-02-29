let data = [{
        CATEGORY: 'PROMOTIONS',
        COMMENTS: 'Promotional end well maintained',
        SCORE: 100,
        WEIGHTING: '3.0%'
    },
    {
        CATEGORY: 'PLANSOGRAMS',
        COMMENTS: 'Planogram of NAB and crisps not maintained properly and price tags missing in all categories',
        SCORE: 74,
        WEIGHTING: '18.0%'
    }, {
        CATEGORY: 'OPERATIONS',
        COMMENTS: 'Store operations are satisfactory',
        SCORE: 100,
        WEIGHTING: '10.0%'
    },
    {
        CATEGORY: 'FACILITIES',
        COMMENTS: 'Store room need to organise properly and shelves and chiller cleaning required',
        SCORE: 85,
        WEIGHTING: '13.0%'
    },
    {
        CATEGORY: 'FOOD SAFETY & HSSE',
        COMMENTS: 'Products FIFO not maintained',
        SCORE: 91,
        WEIGHTING: '22.0%'
    },
    {
        CATEGORY: 'FORECOURT',
        COMMENTS: 'Forecourt area well maintained',
        SCORE: 100,
        WEIGHTING: '5.0%'
    }, {
        CATEGORY: 'ADDED VALUE',
        COMMENTS: 'Updated',
        SCORE: 'N/A',
        WEIGHTING: '0.0%'
    }, {
        CATEGORY: "TOP 100 SKU'S'",
        COMMENTS: 'Total 20 articles are missing from top 100 skus.',
        SCORE: 100,
        WEIGHTING: '3.0%'
    }, {
        CATEGORY: 'PROMOTIONS',
        COMMENTS: 'Promotional end well maintained',
        SCORE: 79,
        WEIGHTING: '21.0%'
    }, {
        CATEGORY: 'ODD',
        COMMENTS: 'updated',
        SCORE: 89,
        WEIGHTING: '8.0%'
    }
]

var tbody = document.getElementById('t-body')
    // for loop
    ///// create td
    ///// insert text in td (inner text)
    ///// tr.appendChild(td) create a td inside tr

for (let i = 0; i < data.length; i++) {
    var newtr = document.createElement('tr')
    var newtd = document.createElement('td')
    var newtd2 = document.createElement('td')
    var newtd3 = document.createElement('td')
    var newtd4 = document.createElement('td')

    newtd.innerHTML = data[i].CATEGORY
    newtr.appendChild(newtd)

    newtd2.innerHTML = data[i].COMMENTS
    newtr.appendChild(newtd2)

    newtd3.innerHTML = data[i].SCORE
    if (data[i].SCORE >= 85) {
        newtd3.classList.add("highest")
    } else if (data[i].SCORE >= 80) {
        newtd3.classList.add("medium")
    } else {
        newtd3.classList.add("lowest")
    }
    newtd3.classList.add("scoreValue")
    newtr.appendChild(newtd3)

    newtd4.innerHTML = data[i].WEIGHTING
    newtr.appendChild(newtd4)

    tbody.appendChild(newtr)
}

let card = {
    SERVICE_STATION: 'Shell Askari Service Station',
    BUS_ID: 'Pa001',
    ADDENDESS: 100,
    RETAILER: 'Rehan',
    TIM: 'Syed Muzammil Hashmi',
    DM: 'Karachi',
    VISIT_DATE: '07-02-2024 16:00'
}
document.getElementById('SERVICE_STATION').innerText = card.SERVICE_STATION
document.getElementById('BUS_ID').innerText = card.BUS_ID
    // document.getElementById('ADDENDESS').innerText = card.ADDENDESS
document.getElementById('RETAILER').innerText = card.RETAILER
document.getElementById('TIM').innerText = card.TIM
document.getElementById('DM').innerText = card.DM
document.getElementById('VISIT_DATE').innerText = card.VISIT_DATE

let commentData = {
    NAME: "MUNAWAR'S",
    DISCRIPTION: "Store manager needs to work on mentioned below points",
    // LIST: ['Top 100 articles availablity', 'Shelves and chiller cleaning', 'Price tags missing in all categories', 'Planogram of NAB and crisps not maintained']
}
document.getElementById('COMMENT_NAME').innerText = commentData.NAME
document.getElementById('COMMENT_D').innerText = commentData.DISCRIPTION

var ol = document.getElementById('COMMENT_LIST')

for (let i = 0; i < commentData.length; i++) {

    var newli = document.createElement('li')

    console.log(newli)

    newli.innerHTML = commentData.LIST[i]
    ol.appendChild(newli)
    console.log(newli)
    ol.appendChild(newli)

}

// chart //

const ctx = document.getElementById('myChart');

let chartValue = [87, 84, 88, 59];
let chartColor = []
let color = '';

chartValue.forEach(i => {
    if (i >= 85) {
        color = "#7ab234"
    } else if (i >= 80) {
        color = "#ffd300"
    } else {
        color = "#dc1f20"
    }
    chartColor.push(color)
});

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["24/1/24", "26/1/24", "2/2/24", "7/2/24"],
        datasets: [{
            data: chartValue,
            backgroundColor: chartColor,
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "DATE OF VISIT",
                    color: '#000',
                    font: {
                        size: 13,
                        weight: 800,
                    }
                },
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "SCORE %",
                    color: '#000',
                    font: {
                        size: 13,
                        weight: 800,
                    }
                },
                grid: {
                    display: false
                }
            },
        }
    }
});

// img //

let imageData = [{
        "QUESTION": "Is the A/C on and in working condition?",
        "IMAGE_LINK": "https://s3-us-west-2.amazonaws.com/shell-merchandising/shell/ADHOC_IMAGES/1661_1708856835872.jpg",
        "MODULE_NAME": "Facilities"
    },
    {
        "QUESTION": "Are all chillers on and working or if broken reported for repair?",
        "IMAGE_LINK": "https://s3-us-west-2.amazonaws.com/shell-merchandising/shell/ADHOC_IMAGES/1661_1708856853959.jpg",
        "MODULE_NAME": "Facilities"
    },
    {
        "QUESTION": "Does the Select staff greet the customers when they enter the store?",
        "IMAGE_LINK": "https://s3-us-west-2.amazonaws.com/shell-merchandising/shell/ADHOC_IMAGES/1661_1708856786457.jpg",
        "MODULE_NAME": "Operations"
    },
    {
        "QUESTION": "Are all staff members wearing the correct clean uniform and name tags?",
        "IMAGE_LINK": "https://s3-us-west-2.amazonaws.com/shell-merchandising/shell/ADHOC_IMAGES/1661_1708856799096.jpg",
        "MODULE_NAME": "Operations"
    },
    {
        "QUESTION": "NAB: Golden Rule 1. Is NAB Exactly To Planogram?",
        "IMAGE_LINK": "https://s3-us-west-2.amazonaws.com/shell-merchandising/shell/ADHOC_IMAGES/1661_1708856686283.jpg",
        "MODULE_NAME": "Planograms"
    },
    {
        "QUESTION": "NAB: Golden Rule 2. Are There No More Than 3 Missing SKUs From The Planogram?",
        "IMAGE_LINK": "https://s3-us-west-2.amazonaws.com/shell-merchandising/shell/ADHOC_IMAGES/1661_1708856716464.jpg",
        "MODULE_NAME": "Planograms"
    },
    {
        "QUESTION": "Are The Promotional Ends Current And To Planogram?",
        "IMAGE_LINK": "https://s3-us-west-2.amazonaws.com/shell-merchandising/shell/ADHOC_IMAGES/1661_1708856584466.jpg",
        "MODULE_NAME": "Promotions"
    },
    {
        "QUESTION": "Golden Rule 1. Is There No Stock Blocking The Header?",
        "IMAGE_LINK": "https://s3-us-west-2.amazonaws.com/shell-merchandising/shell/ADHOC_IMAGES/1661_1708856625378.jpg",
        "MODULE_NAME": "Promotions"    
    }
]

let secondPage = document.querySelector('.second-page')

for (let i = 0; i < imageData.length; i++) {
    console.log(i)
    if (i % 6 == 0) {
        console.log("6 completes")

        var header = document.createElement('div')
        header.setAttribute("class", "brand")

        header.innerHTML = '<h1> BRAND STANDARDS OBSERVATIONS AND ACTIONS </h1>'
        secondPage.appendChild(header)
            // console.log("header: ", header)
            // console.log("second-page: ", secondPage)

        var box = document.createElement('div')
            // box.setAttribute('class', 'imageWrapper')
        box.classList.add("imageWrapper")
        box.setAttribute('id', 'box')
        secondPage.append(box)
    }

    // create div with class side-image
    // create div with class main-text
    // create h5 with id BRAND
    // create span with inner text -
    // create span with BRAND_D id
    // append span and h5 in main-text
    // append main text in side-image
    // create img tag with class
    // append img tag in side image
    // append side-image in box

    var sideImage = document.createElement('div');
    sideImage.setAttribute('class', 'side-image')

    var mainText = document.createElement('div');
    mainText.setAttribute('class', 'main-text')

    var newh5 = document.createElement('h5')
    newh5.setAttribute('id', 'MODULE_NAME')
    newh5.innerHTML = imageData[i].MODULE_NAME
    mainText.appendChild(newh5)

    var separater = document.createElement('span')
    separater.innerHTML = '-'
    mainText.appendChild(separater)




    // var newLine = document.createElement('line')
    // newLine.setAttribute("id", "LINE")
    // newLine.innerHTML = imageData[i].LINE
    // mainText.appendChild(newLine)

    var newSpan = document.createElement('span')
        // newSpan.setAttribute("id", "QUESTION")
    newSpan.innerHTML = imageData[i].QUESTION
    mainText.appendChild(newSpan)

    sideImage.appendChild(mainText)

    var newImg = document.createElement("img")
    newImg.setAttribute("id", "IMAGE_LINK");
    newImg.setAttribute('src', imageData[i].IMAGE_LINK)
    sideImage.appendChild(newImg)

    box.appendChild(sideImage)



}

let bubbleValues = [84, 80, 85, 79]

let bubble = document.querySelectorAll(".bubble-box");
let bubblevalue = "";
let bubblevalue1 = "";
bubble.forEach((element, i) => {
    if (bubbleValues[i] >= 85) {
        bubblevalue = "highest"
        bubblevalue1 = "MERIT"
    } else if (bubbleValues[i] >= 80) {
        bubblevalue = "medium"
        bubblevalue1 = "AVERAGE"
    } else {
        bubblevalue = "lowest"
        bubblevalue1 = "FAIL"
    }
    element.classList.add(bubblevalue)
    element.innerHTML = `<span>${bubbleValues[i]}%</span><p>${bubblevalue1}</p>`
});