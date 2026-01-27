function submitData () {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    let interestDOMs = document.querySelectorAll('input[name=interest]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');
    // ส่วนของ Logic การวน Loop เก็บค่า "งานอดิเรก" ตามรูปแบบ
    let interest = ''
    for (let i = 0; i < interestDOMs.length; i++) {
        interest += interestDOMs[i].value
        if (i != interestDOMs.length - 1) {
            interest += ','
        }
    }
    // รวบรวมข้อมูลลงใน Object userData
    let userData ={
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interest: interest
    }

    console.log('submitData', userData);
}