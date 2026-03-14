const BASE_URL = "http://localhost:8000"; 
 
let mode = 'CREATE'; 
let selectedID = '' 
 
window.onload = async () => { 
    const urlParams = new URLSearchParams(window.location.search); 
    const id = urlParams.get('id'); 
    if(id){ 
        mode = 'EDIT'; 
        selectedID = id; 
 
        // 1. ดึงข้อมูล user จาก backend ด้วย id ที่ได้มา 
        try { 
            const response = await axios.get(`${BASE_URL}/users/${id}`); 
            const user = response.data; 
            console.log('user', user); 
        // 2. นำข้อมูลที่ได้มาแสดงใน form ให้ user edit     
     
        let firstNameDOM = document.querySelector('input[name=firstname]'); 
        let lastNameDOM = document.querySelector('input[name=lastname]'); 
        let ageDOM = document.querySelector('input[name=age]'); 
        let descriptionDOM = document.querySelector('textarea[name=description]'); 
 
        firstNameDOM.value = response.data.firstname; 
        lastNameDOM.value = response.data.lastname; 
        ageDOM.value = response.data.age; 
        descriptionDOM.value = response.data.description; 
 
        let genderDOMs = document.querySelectorAll('input[name=gender]'); 
        let interestDOMs = document.querySelectorAll('input[name=interests]'); 
 
        for (let i = 0; i < genderDOMs.length; i++) { 
            if(genderDOMs[i].value == user.gender) { 
                genderDOM[i].checked = true; 
            } 
        } 
 
        for (let i = 0; i < interestDOMs.length; i++) { 
            if(user.interests.includes(interestDOMs[i].value)) { 
                interestDOMs[i].checked = true; 
            } 
        } 
         
        } catch (error) { 
            console.error('error', error); 
        } 
         
    } 
} 
 
 
const validateData = (userData) => { 
    let errors = []; 
    if (!userData.firstname) { 
        errors.push('กรุณากรอกชื่อ'); 
    } 
    if (!userData.lastname) { 
        errors.push('กรุณากรอกนามสกุล'); 
    } 
    if (!userData.age) { 
        errors.push('กรุณากรอกอายุ'); 
    } 
    if (!userData.gender) { 
        errors.push('กรุณาเลือกเพศ'); 
    } 
    if (!userData.interests) { 
        errors.push('กรุณาเลือกความสนใจอย่างน้อย 1 อย่าง'); 
    } 
    if (!userData.description) { 
        errors.push('กรุณากรอกคำอธิบายเกี่ยวกับตัวคุณ'); 
    } 
    return errors; 
} 
 
const submitData = async () => { 
    let firstNameDOM = document.querySelector('input[name=firstname]'); 
    let lastNameDOM = document.querySelector('input[name=lastname]'); 
    let ageDOM = document.querySelector('input[name=age]'); 
    let genderDOM = document.querySelector('input[name=gender]:checked') || {}; 
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked') || {}; 
    let descriptionDOM = document.querySelector('textarea[name=description]'); 
 
    let messageDOM = document.getElementById('message') 
    try { 
        let interest = '' 
        for (let i = 0; i < interestDOMs.length; i++) { 
            interest += interestDOMs[i].value 
            if (i != interestDOMs.length - 1) { 
                interest += ',' 
            } 
        } 
 
        let userData = { 
            firstname: firstNameDOM.value, 
            lastname: lastNameDOM.value, 
            age: ageDOM.value, 
            gender: genderDOM.value, 
            description: descriptionDOM.value, 
            interests: interest 
        } 
 
       const errors = validateData(userData); 
       if (errors.length > 0) { 
            //ถ้ามี error  
            throw { 
                message: 'กรอกข้อมูลไม่ครบถ้วน', 
                errors: errors 
          } 
       } 
        
       let message = 'บันทึกข้อมูลสำเร็จ'; 
 
       if (mode == 'CREATE') { 
            const response = await axios.post( `${BASE_URL}/users`, userData) 
            console.log('response', response.data); 
         } else { 
            const response = await axios.put( `${BASE_URL}/users/${selectedID}`, userData) 
            message = 'แก้ไขข้อมูลสำเร็จ'; 
            console.log('response', response.data); 
        } 
 
         
        messageDOM.innerText = message; 
        messageDOM.className = 'message success' 
 
    } catch (error) { 
        console.log('error message', error.message); 
        console.log('error', error.errors); 
        if (error.response) { 
            console.log('Error response:', error.response.data.message); 
            error.message = error.response.data.message; 
            error.errors = error.response.data.errors; 
        } 
        let htmlData = '<div>' 
        htmlData += <div>${error.message}</div> 
        htmlData += '<ul>' 
        for (let i = 0; i < error.errors.length; i++) { 
            htmlData += <li>${error.errors[i]}</li> 
        } 
        htmlData += '</ul>' 
        htmlData += '</div>' 
        messageDOM.innerHTML = htmlData 
        messageDOM.className = 'message danger' 
    } 
}