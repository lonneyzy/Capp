let token = '7835922409:AAH04TS7V_7PVEjPkFeOCTgF4H9WjYdkZQk';
let botName = 'ANotScamm_bot';
let url_api = `https://api.telegram.org/bot${token}/sendMessage`;

let chat_id = '5735781904'; 

let tg = document.querySelector('#tg');  
let success = document.querySelector('#success');  

tg.addEventListener('submit', function (e) {
    e.preventDefault();  

    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправитель : </b> ${this.name.value} \n`;
    message += `<b>Номер : </b> ${this.phone.value} \n`;  

    axios.post(url_api, {
        chat_id: chat_id,
        parse_mode: "HTML",  
        text: message,
    })
        .then(res => {
            this.name.value = '';
            this.phone.value = '';
            success.style.display = 'block';
        })
        .catch(err => {
            console.error('Error sending message to Telegram bot:', err);
        });
});