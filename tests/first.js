import { Selector } from 'testcafe';
import Homepage from '../fixtures/homepage';

fixture `Gmail`
    .page `http://mail.google.com`;

test('Login test', async t => {
    const homepage = new Homepage();

    await t
        .typeText(homepage.username, 'John.Smith@gmail.com')
        .expect(homepage.username.value).contains('John.Smith@gmail.com')
        .click(homepage.next);
});
