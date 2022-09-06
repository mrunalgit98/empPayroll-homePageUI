window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th>" +
                    "<th>Department</th><th>Salary</th><th>Start Date</th>" +
                    "<th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    //to view tabular form using json
    let empPayrollList = createEmployeePayrollJSON();  
    for ( const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>
                <img class="profile" alt="" src="${empPayrollData._profilePic}">
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>
                ${getDeptHtml(empPayrollData._department)}
            </td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._start_date}</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                            src="../assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit"
                            src="../assets/icons/create-black-18dp.svg">           
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for ( const dept of deptList ) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'rashi shrma',
            _gender: 'Female',
            _department: [
                'Engineering', 'HR'
            ],
            _salary: '600000',
            _start_date: '01 jan 2020',
            _note: '',
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        },
        {
            _name: 'Mrunal bhoir',
            _gender: 'Male',
            _department: [
                'HR', 'Finance'
            ],
            _salary: '800000',
            _start_date: '01 Feb 2020',
            _note: '',
            _profilePic: '../assets/profile-images/Ellipse -3.png'
        }
    ]
    return empPayrollListLocal;
}