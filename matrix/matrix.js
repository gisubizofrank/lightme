const arrayI = [...document.querySelectorAll('#matrix1 input')]
const arrayJ = [...document.querySelectorAll('#matrix2 input')]
const oper = document.querySelector('select')
addEventListener('keydown', e => {
    if (e.code == 'Enter') {
        const A = [...document.querySelectorAll('#matrix3 p')]
        let I = []
        let J = []
        arrayI.forEach(input => {
            I.push(parseInt(input.value))
        });
        arrayJ.forEach(input => {
            J.push(parseInt(input.value))
        });
        if (oper.value == '×') {
            A[0].textContent = (I[0]*J[0])+(I[1]*J[3])+(I[2]*J[6])
            A[1].textContent = (I[0]*J[1])+(I[1]*J[4])+(I[2]*J[7])
            A[2].textContent = (I[0]*J[2])+(I[1]*J[5])+(I[2]*J[8])
            A[3].textContent = (I[3]*J[0])+(I[4]*J[3])+(I[5]*J[6])
            A[4].textContent = (I[3]*J[1])+(I[4]*J[4])+(I[5]*J[7])
            A[5].textContent = (I[3]*J[2])+(I[4]*J[5])+(I[5]*J[8])
            A[6].textContent = (I[6]*J[0])+(I[7]*J[3])+(I[8]*J[6])
            A[7].textContent = (I[6]*J[1])+(I[7]*J[4])+(I[8]*J[7])
            A[8].textContent = (I[6]*J[2])+(I[7]*J[5])+(I[8]*J[8])
        } else if (oper.value == '÷') {
            let RD = (J[0]*J[4]*J[8])+(J[1]*J[5]*J[6])+(J[2]*J[3]*J[7])
            let SD = (J[2]*J[4]*J[6])+(J[0]*J[5]*J[7])+(J[1]*J[3]*J[8])
            let Det = RD - SD
            
            A[0].textContent = ((J[4]*J[8])-(J[7]*J[5]))/Det
            A[1].textContent = (-((J[1]*J[8])-(J[7]*J[2])))/Det
            A[2].textContent = ((J[1]*J[5])-(J[4]*J[2]))/Det
            A[3].textContent = (-((J[3]*J[8])-(J[6]*J[5])))/Det
            A[4].textContent = ((J[0]*J[8])-(J[6]*J[2]))/Det
            A[5].textContent = (-((J[0]*J[5])-(J[3]*J[2])))/Det
            A[6].textContent = ((J[3]*J[7])-(J[6]*J[4]))/Det
            A[7].textContent = (-((J[0]*J[7])-(J[6]*J[1])))/Det
            A[8].textContent = ((J[0]*J[4])-(J[3]*J[1]))/Det
            
            console.log(Det)
        }
    }
})