function encrypt() {
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
        texto = ciphertext;
        tittlemessage.textContent = 'Successfully encrypted text';
        paragraph.textContent = '';
        mun.src = '../imgs/encrip.png'
    } else {
        mun.src = '../imgs/buscar.png'
        alert('You have not entered the text')
    }                           
}