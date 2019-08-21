import { Selector } from 'testcafe';

fixture `Gmail`
    .page `http://mail.google.com`;

test('Login test', async t => {
//    const runner = t.createRunner();
//    runner.reporter('minimal');
    const username = Selector('#identifierId');

    await t
        .typeText(username, 'John.Smith@gmail.com')
        .expect(username.value).contains('John.Smith@gmail.com')
        .click('#identifierNext');
});