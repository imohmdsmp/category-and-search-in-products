function categories() {
    let _dropdownItem = document.getElementsByClassName('_dropdown-item')[0]

    if (_dropdownItem.clientHeight == 0) {
        _dropdownItem.style.height = "auto"
    } else {
        _dropdownItem.style.height = "0"
    }
    let _dropItem = document.querySelectorAll('._dropdown-item ul li')
    let _mainBox = document.getElementsByClassName('box-product');
    let _h4 = document.querySelectorAll('.box-product h4')

    for (s = 0; s < _dropItem.length; s++) {
        _dropItem[s].addEventListener('click', function () {
            document.getElementById('reposi').innerText = this.innerText
            for (q = 0; q < _mainBox.length; q++) {
                if (this.innerText.toLowerCase().includes('all')) {
                    _mainBox[q].style.display = 'block'
                }
            }
            if (this.innerText.toLowerCase().includes('highest price')) {
                for (w = 0; w < _h4.length; w++) {
                    let x = [_h4[w].innerText]
                    x = x.sort((a,b)=> a - b)
                    // console.log(x)

                }
            }


            categories()
        })
    }
}







function _search(self) {
    let inputValue = self.value
    let shoesName = document.querySelectorAll('.box-product p')
    let notFound = document.getElementsByClassName('notfound')[0]
    notFound.style.display = 'block'
    for (i = 0; i < shoesName.length; i++) {
        let mainBox = shoesName[i].parentElement.parentElement
        mainBox.style.display = 'none'
        if (shoesName[i].innerText.toLowerCase().substring(0, inputValue.length).includes(inputValue) || shoesName[i].innerText.toUpperCase().substring(0, inputValue.length).includes(inputValue) || shoesName[i].innerText.substring(0, inputValue.length).includes(inputValue)) {
            shoesName[i].innerHTML = '<b style="color:black">' + shoesName[i].innerText.substring(0, inputValue.length) + '</b>' + shoesName[i].innerText.substring(inputValue.length)
            mainBox.style.display = 'block'
            notFound.style.display = 'none'
        }
        document.getElementsByClassName('box-product')[i].addEventListener('click', function () {
            let moveText = this.children[1].children[2]
            document.getElementsByTagName('input')[0].value = moveText.innerText
        })
    }
}