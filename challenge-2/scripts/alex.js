
const firstname = "Alex"
const surname = "Naidoo"
const role = "Head of Marketing"

const display = `${firstname} ${surname} (${role})`;
document.querySelector('#alex').innerText = display

export default {role};

// private firstname = "Alex"
// private surname = "Naidoo"
// public role = "Head of Marketing"

// private display= firstname + " " + surname + " (" + role + ")"
// document.querySelector('#alex').innerText = display