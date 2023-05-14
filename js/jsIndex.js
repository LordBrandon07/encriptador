function Encrypt() {
    let texto = document.getElementById('text').value;
    let tittlemessage = document.getElementById('messengeTittle');
    let paragraph = document.getElementById('paragraph');
    let mun = document.getElementById('im')

    let ciphertext = texto .replace(/e/gi, 'enter')
                            .replace(/i/gi, 'imes')
                            .replace(/a/gi, 'ai')
                            .replace(/o/gi, 'ober')
                            .replace(/u/gi, 'utfat')

    if (texto.length != 0) {
        document.getElementById('text').value = ciphertext;
        tittlemessage.textContent = 'Successfully encrypted text';
        paragraph.textContent = '';
        mun.src = '../encriptador/imgs/encrip.png'
    } else {
        mun.src = '../encriptador/imgs/buscar.png';
        tittlemessage.textContent = 'No message was found';
        paragraph.textContent = 'Enter the text you want to encrypt or decrypt.';
        swal('😱😰', 'You have not entered the text', 'warning')
    }                           
}

function Decrypt(){
    let texto = document.getElementById('text').value;
    let tittlemessage = document.getElementById('messengeTittle');
    let paragraph = document.getElementById('paragraph');
    let mun = document.getElementById('im')

    let ciphertext = texto .replace(/enter/gi, 'e')
                            .replace(/imes/gi, 'i')
                            .replace(/ai/gi, 'a')
                            .replace(/ober/gi, 'o')
                            .replace(/utfat/gi, 'u')

    if (texto.length != 0) {
        document.getElementById('text').value = ciphertext;
        tittlemessage.textContent = 'Successfully decrypted text';
        paragraph.textContent = '';
        mun.src = '../encriptador/imgs/desc.png'
    } else {
        mun.src = '../encriptador/imgs/buscar.png';
        tittlemessage.textContent = 'No message was found';
        paragraph.textContent = 'Enter the text you want to encrypt or decrypt.';
        swal('😱😰', 'You have not entered the text', 'warning')
    }      
}