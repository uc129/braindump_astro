/** @format */

window.addEventListener('load', getData);

async function getData() {
  const response = await fetch('/assets/resume.pdf');
  const data = response;
  console.log('data', data);
}
