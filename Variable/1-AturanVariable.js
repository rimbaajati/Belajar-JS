// 1. Tidak Boleh Memberikan Nama yang Sama dalam Cakupan yang Sama
// Company data
// const name = 'Dicoding';
const legal = 'LLC';

// Employee data
const name = 'John'; // SyntaxError: Identifier 'name' has already been declared
const division = 'IT';


// 2. boleh menggunakan nama variabel yang sama selama cakupannya berbeda
function printCompanyInfo() {
    const name = 'Dicoding'; // <- nama variabel sama
    const legal = 'LLC';
    
    console.log('Company name:', name);
    console.log('Legal type:', legal);
}

function printEmployeeInfo() {
    const name = 'John'; // <- nama variabel sama
    const division = 'IT';

    console.log('Employee name:', name);
    console.log('Division:', division);
}

printCompanyInfo();
printEmployeeInfo();


// 3. Nama variable hanya bisa terdiri dari huruf
// nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;

// nama variabel yang salah
// const first-name = 'Fulan'; // tidak boleh mengandung karakter -
// const last name = 'Lestari'; // tidak boleh mengandung spasi
// const @message = 'Hello, World!'; // tidak boleh mengandung karakter @


// 4. Nama Variable tidak boleh diawali dengan angka
// nama variabel yang benar
    // const firstName = 'Fulan';
    // const _secondName = 'Fulana';

// nama variabel yang salah karena diawali dengan angka
// const 1stName = 'Fulan';
// const 2ndName = 'Fulana';