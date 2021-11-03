let btn1 = document.querySelector('.btn-1')
let btn2 = document.querySelector('.btn-2')
let mainSection = document.querySelector('.main')




btn1.addEventListener('click',()=>{
    let addSection = document.createElement('div')
    document.body.append(addSection)
    addSection.classList.add('add-section')
    let addBlock = document.createElement('div')
    addSection.append(addBlock)
    addBlock.classList.add('add-block')
    let inputName = document.createElement('input')
    addBlock.append(inputName)
    inputName.classList.add('input-name')
    let inputId = document.createElement('input')
    addBlock.append(inputId)
    inputId.classList.add('input-id')
    let btn2 = document.createElement('button')
    addBlock.append(btn2)
    btn2.classList.add('btn-2')
    btn2.innerHTML = 'Add System'
    inputName.setAttribute('placeholder','System Name')
    inputId.setAttribute('placeholder','ID')
    inputId.setAttribute('type','number')
    addSection.addEventListener('click',(ev) => {
        ev.stopImmediatePropagation()
        if (ev.target == addSection && ev.target != addBlock) {
            addSection.remove()
        }    
    })


    btn2.addEventListener('click',()=>{


    let i = 0
        if (inputName.value !== '' && inputId.value !== '') {
            addSection.remove()
        let parentUserSection = document.createElement('div')
        parentUserSection.classList.add('parent-user-section')
        
        let parentUser = document.createElement('div')
        parentUser.classList.add('user-block')
        parentUserSection.append(parentUser)
        mainSection.append(parentUserSection)
        let parentUserList = document.createElement('ul')
        parentUser.append(parentUserList)
        let vector = document.createElement('div')
        vector.classList.add('vector')
        parentUser.prepend(vector)
        let vector1 = document.createElement('div')
        let vector2 = document.createElement('div')
        vector.append(vector1)
        vector.append(vector2)
        vector1.classList.add('vector-1')
        vector2.classList.add('vector-2')

        parentUserList.classList.add('parent-user-list')
        let listName = document.createElement('li')
        parentUserList.append(listName)
        let listId = document.createElement('li')
        parentUserList.append(listId)
        let listDate = document.createElement('li')
        parentUserList.append(listDate)
        let listActive = document.createElement('li')
        parentUserList.append(listActive)
        listName.innerHTML = inputName.value 
        listId.innerHTML = inputId.value
        listDate.innerHTML = '28.Oct.2021'
            listActive.innerHTML = i
            
            
        let btnBlock = document.createElement('div')
        parentUser.append(btnBlock)
        btnBlock.classList.add('btn-block')
        let btn3 = document.createElement('button')  
        btn3.classList.add('btn-2')
        btn3.innerHTML = 'Add License'
        btnBlock.append(btn3)
        listName.style.backgroundColor = '#1a1c1e'
        listId.style.backgroundColor = '#1a1c1e'
        listDate.style.backgroundColor = '#1a1c1e'
        listActive.style.backgroundColor = '#1a1c1e'
        inputName.value = ''
        inputId.value = ''
        let removeBtn = document.createElement('button')
        removeBtn.classList.add('remove-btn')
        btnBlock.append(removeBtn)
        removeBtn.innerHTML = 'Remove'
           
        let listNav2 = document.createElement('ul')
        parentUserSection.append(listNav2)
        listNav2.classList.add('list-nav-2')
        let listNav21 = document.createElement('li')
        listNav2.append(listNav21)
        listNav21.innerHTML = 'Licenses'
        let listNav22 = document.createElement('li')
        listNav2.append(listNav22)
        listNav22.innerHTML = 'Expires'

        vector.addEventListener('click',()=>{
            vector1.classList.toggle('vector-rotate-1')
            vector2.classList.toggle('vector-rotate-2')
            parentUserSection.classList.toggle('section-hide')
            
        })
    
        removeBtn.addEventListener('click',() => {
            parentUserSection.remove()
            i = 0
        })
    
        
        
        btn3.addEventListener('click',()=> {
            let addSection2 = document.createElement('div')
            document.body.append(addSection2)
            addSection2.classList.add('add-section-2')
            let addBlock2 = document.createElement('div')
            addSection2.append(addBlock2)
            addBlock2.classList.add('add-block-2')
            let inputLic = document.createElement('input')
            inputLic.classList.add('licenses')
            addBlock2.append(inputLic)
            let inputExp = document.createElement('input')
            inputExp.classList.add('expires')
            addBlock2.append(inputExp)
            let btn4 = document.createElement('button')
            btn4.classList.add('btn-3')
            btn4.innerHTML = 'Add License'
            addBlock2.append(btn4)
            inputLic.setAttribute('placeholder','Licenses')
            inputExp.setAttribute('placeholder','Expires')
            addSection2.addEventListener('click',(ev1) => {
                ev1.stopImmediatePropagation()
                if (ev1.target == addSection2 && ev1.target != addBlock2) {
                    addSection2.remove()
                }    
            })

            btn4.addEventListener('click',()=>{
                if (inputLic.value !== '' && inputExp.value !== '') {
                    addSection2.remove()          
                let childUser = document.createElement('div')
                childUser.classList.add('child-user')
                parentUserSection.append(childUser)
                let childUserList = document.createElement('ul')
                childUser.append(childUserList)
                childUserList.classList.add('child-user-list')
                let listLicenses = document.createElement('li')
                listLicenses.style.backgroundColor = '#1a1c1e'
                childUserList.append(listLicenses)
                let listExpires = document.createElement('li')
                listExpires.style.backgroundColor = '#1a1c1e'
                childUserList.append(listExpires)
                listLicenses.innerHTML = inputLic.value
                listExpires.innerHTML = inputExp.value
                let removeBtn2 = document.createElement('button')
                removeBtn2.innerHTML = 'Remove'
                removeBtn2.classList.add('remove-btn')
                childUser.append(removeBtn2)
                inputLic.value = ''
                inputExp.value = ''
                    
                
                    i++
                    listActive.innerHTML = i
                    
    
    
                removeBtn2.addEventListener('click',()=> {
                    childUser.remove()
                    listNav2.remove()
                    i--
                    listActive.innerHTML = i
                    
                })
    
    
                } else {
                    alert('Empty,please enter the details.')
                } 
            })
    
    
        })

        
    
    
        } else {
            alert('Empty,please enter the details.')
        }
    
    
    })


})
let navSub = document.querySelector('.nav-sub')
let navOut = document.querySelector('.nav-out')
let navOff = document.querySelector('.nav-off')
navOut.addEventListener('click',() => {
    mainSection.style.display = 'none'
    navSub.setAttribute('class','nav-back')
    navOff.setAttribute('class','nav-back')
    navOut.setAttribute('class','nav-sub')

})
navOff.addEventListener('click',()=> {
    navOff.setAttribute('class','nav-sub')
    mainSection.style.display = 'none'
    navSub.setAttribute('class','nav-back')
    navOut.setAttribute('class','nav-back')
})
navSub.addEventListener('click',()=> {
    navOff.setAttribute('class','nav-back')
    navOut.setAttribute('class','nav-back')
    mainSection.style.display = 'block'
    navSub.setAttribute('class','nav-sub')
})












   