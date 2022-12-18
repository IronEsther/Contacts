// Testcase 2.1
document.querySelector('.addBtn').click();
document.querySelector('.vornameField').value = 'Vorname';
document.querySelector('.nachnameField').value = 'Nachname';
document.querySelector('.dateField').value = '2022-05-24';
document.querySelector('.telefonnummerField').value = '000 000 00 00';
document.querySelector('.submitBtn').click();
if (
  !document.querySelector('body > div > div:nth-child(2) > h1').textContent ===
  'test'
) {
  console.log('there was an error');
}

// Testcase 3.1
document.querySelector('.delete').click();
if (document.querySelectorAll('#contact').length > 2) {
  console.log('Contact was not deleted correctly');
}

// testcase 4.1
document.querySelector('.edit').click();
document.querySelector('.vornameField').value = 'Vorname';
document.querySelector('.nachnameField').value = 'Nachname';
document.querySelector('.dateField').value = '2022-05-24';
document.querySelector('.telefonnummerField').value = '000 000 00 00';
document.querySelector('.submitBtn').click();
if (
  !document.querySelector('body > div > div:nth-child(2) > h1').textContent ===
  'test'
) {
  console.log('there was an error');
}
