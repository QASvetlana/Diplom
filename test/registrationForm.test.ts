import { Registration_form } from "../src/registrationForm";

describe("Registration form tests", () => {
    let registration_form: Registration_form;

    beforeEach(() => {
        registration_form = new Registration_form("qgwsnsmy@andex.com", "qwrwq4qq", "wwww", 3, true, true);
    });

    test("Positive test: email contain @",  () => {
        registration_form.setEmail("qgwsnsmy@andex.com");
        expect(registration_form.email).toContain("@");
    });

    test("Positive test: email contain com",  () => {
        registration_form.setEmail("qgwsnsmy@andex.com");
        expect(registration_form.email).toContain("com");
    });

    test("Negative test: email do not contain ru",  () => {
        registration_form.setEmail("qgwsnsmy@andex.com");
        expect(registration_form.email).toContain("ru");
    });

    test("Negative test: email do not contain whitespace",  () => {
        registration_form.setEmail("qgwsn  smy@andex.com");
        expect(registration_form.email).toContain(" ");
    });

    test("Negative test: email contain %",  () => {
        registration_form.setEmail("qgwsnsmy@andex.com");
        expect(registration_form.email).toContain("%");
    });

    test("Negative test: email contain ,,,",  () => {
        registration_form.setEmail("qgwsnsmy@andex.com");
        expect(registration_form.email).toContain(",,,");
    });

    test("Positive test: email contain .",  () => {
        registration_form.setEmail("qgwsnsmy@andex.com");
        expect(registration_form.email).toContain(".");
    });

    test("Positive test: email must be",  () => {
        registration_form.setEmail("qgwsnsmy@andex.com");
        expect(registration_form.email).toBeTruthy();
    });

    test("Negative test: email undefined",  () => {
        registration_form.setEmail(undefined);
        expect(registration_form.email).toBeUndefined;
    });

    test("Positive test: password must consist of 8 characters",  () => {
        registration_form.setPassword("qwrwq4qq");
        expect(registration_form.password).toHaveLength(8);
    });

    test("Negative test: password cannot contain whitespace",  () => {
        registration_form.setPassword("qwrw q4qq");
        expect(registration_form.password).toContain(" ");
    });

    test("Negative test: password must consist of 8 characters",  () => {
        registration_form.setPassword("qwr");
        expect(registration_form.password).toHaveLength(8);
    });

    test("Positive test: password must be",  () => {
        registration_form.setPassword("qwrwq4qq");
        expect(registration_form.password).toBeTruthy();
    });

    test("Positive test: password must contain 4",  () => {
        registration_form.setPassword("qwrwq4qq");
        expect(registration_form.password).toContain("4");
    });

    test("Positive test: username must be",  () => {
        registration_form.setUsername("wwww");
        expect(registration_form.username).toBeTruthy();
    });

    test("Positive test: username must contain w",  () => {
        registration_form.setUsername("wwww");
        expect(registration_form.username).toContain("w");
    });

    test("Negative test: username cannot contain whitespace",  () => {
        registration_form.setUsername("ww  ww");
        expect(registration_form.username).toContain("  ");
    });

    test("Negative test: username cannot contain @",  () => {
        registration_form.setUsername("wwww");
        expect(registration_form.username).toContain("@");
    });
    
    test("Negative test: username cannot contain ,,",  () => {
        registration_form.setUsername("wwww");
        expect(registration_form.username).toContain(",,");
    });

    test("Negative test: username cannot contain //",  () => {
        registration_form.setUsername("wwww");
        expect(registration_form.username).toContain("//");
    });

    test("Positive test: age must be greater then null",  () => {
        registration_form.setAge(10);
        expect(registration_form.age).toBeGreaterThan(0);
    });

    test("Positive test: age must be less then 150",  () => {
        registration_form.setAge(10);
        expect(registration_form.age).toBeLessThanOrEqual(150);
    });

    test("Negative test: age must be less then 150",  () => {
        registration_form.setAge(1033);
        expect(registration_form.age).toBeLessThanOrEqual(150);
    });

    test("Negative test: age must be less then 150",  () => {
        registration_form.setAge(150.5);
        expect(registration_form.age).toBeLessThanOrEqual(150);
    });

    test("Negative test: age must be a positive number",  () => {
        registration_form.setAge(-150);
        expect(registration_form.age).toBeLessThanOrEqual(150);
    });

    test("Positive test: age must be",  () => {
        registration_form.setAge(10);
        expect(registration_form.age).toBeTruthy();
    });

    test("Positive test: check that user agree with rules",  () => {
        registration_form.agreeWithTerms(true);
        expect(registration_form.termsAgreement).toBeTruthy();
    });

    test("Negative test: check that user agree with rules",  () => {
        registration_form.agreeWithTerms(false);
        expect(registration_form.termsAgreement).toBeTruthy();
    });

    test("Positive test: check that user can register",  () => {
        registration_form.register(true);
        expect(registration_form.registered).toBeTruthy();
    });

    test("Negative test: check that user can register",  () => {
        registration_form.register(false);
        expect(registration_form.registered).toBeTruthy();
    });

});


