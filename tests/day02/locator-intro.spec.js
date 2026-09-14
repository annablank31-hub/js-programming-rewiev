import { test } from "@playwright/test";

test("Simple google test", async ({page}) => {
    // test codes
   await page.goto("https://www.google.com");
   await page.waitForTimeout(3000);

   let serchBox =  page.locator("//textarea[@class='gLFyf']");

   // let serchBox = await page.$$("//textarea[@class='gLFyf']");

  await serchBox.fill("CYDEO");

  await page.waitForTimeout(3000);

  await  serchBox.press("Enter");

});



/*
<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" aria-label="Search" placeholder="" 
aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" 
id="ti6dpd" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwiw6fivieiWAxWYFlkFHdJXJgkQ39UDCBI"></textarea>

*/

////textarea[@class='gLFyf']