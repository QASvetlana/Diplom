export class Registration_form {
    email: string;
    password: string;
    username: string;
    age: number;
    termsAgreement: boolean = false;
    registered: boolean = false; 

    constructor(
         email: string,
         password: string,
         username: string,
         age: number,
         termsAgreement: boolean,
         registered: boolean, 
    ) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.age = age;
        this.termsAgreement = termsAgreement;
        this.registered = registered;
    }


setEmail(email: any): void {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(email); 
    console.log('e-mail is ' + (result ? 'correct' : 'incorrect'));
}

setPassword(password: string): any {
    const expression1: RegExp = /^(?=.*\d)[0-9a-zA-Z]{8,}$/;
    const result1: boolean = expression1.test(password); 
    console.log('password is ' + (result1 ? 'correct' : 'incorrect'));
}

setUsername(username: string): any {
    const expression2: RegExp = /^$/;
    const result2: boolean = expression2.test(username); 
    console.log('username is ' + (result2 ? 'incorrect' : 'correct'));
}

setAge(age: number){
    if (age >= 0 && age <= 150) {
        console.log('user age is correct');
    }
    else{
        console.log('user age is incorrect');
    }
}

agreeWithTerms(agreement: boolean): any {
return this.termsAgreement = true;     
}

register(regist: boolean): any {
    if (this.email && this.password && this.username && this.age && this.termsAgreement) {
        this.registered = true;
        let regDate = new Date();
        console.log (`Успех! Пользователь зарегистрирован. Дата и время регистрации: ${regDate}`);
    } else {
        let errorText = "Пользователь не может быть зарегистрирован, т.к. указал некорректные данные в поле: ";
        if (this.email) errorText = "\n- email";
        if (this.password) errorText = "\n- пароль";
        if (this.username) errorText = "\n- имя";
        if (this.age) errorText = "\n- возраст";
        return errorText;
}
}
}


let eml = new Registration_form("qgwsnsmy@andex.com", "qwrwq4qq", "wwww", 3, true, true)
eml.setEmail("qgwsnsmy@andex.com");

let psw = new Registration_form("qgwsnsmy@andex.com", "qwrwq4qq", "wwww", 3, true, true)
psw.setPassword("qwrwq4qq");

let usnm = new Registration_form("qgwsnsmy@andex.com", "qwrwq4qq", "qqqq", 3, true, true)
usnm.setUsername("qqqq");

let ag = new Registration_form("qgwsnsmy@andex.com", "qwrwq4qq", "qqqq", 45, true, true)
ag.setAge(45);

let agreed = new Registration_form("qgwsnsmy@andex.com", "qwrwq4qq", "qqqq", 45, false, true)
agreed.agreeWithTerms(false);


let reg = new Registration_form("qgwsnsmy@andex.com", "qwrwq4qq", "qqqq", 45, false, true)
reg.register(true);