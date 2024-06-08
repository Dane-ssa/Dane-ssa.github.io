const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLike1 = document.getElementById("countLike1")
const countLike2 = document.getElementById("countLike2")

const btnDisLike1 = document.getElementById("btnDisLike1")
const btnDisLike2 = document.getElementById("btnDisLike2")
const countDisLike1 = document.getElementById("countDisLike1")
const countDisLike2 = document.getElementById("countDisLike2")

function hitLike1() {
  let totalLike1 = parseInt(countLike1.value) + 1
  countLike1.textContent = totalLike1.toString()
}
btnLike1.addEventListener("click",hitLike1)

function hitLike2() {
  let totalLike2 = parseInt(countLike2.value) + 1
  countLike2.textContent = totalLike2.toString()
}
btnLike2.addEventListener("click",hitLike2)

function hitdisLike1() {
  let totalDisLike1 = parseInt(countDisLike1.value) + 1
  countDisLike1.textContent = totalDisLike1.toString()
}
btnDisLike1.addEventListener("click",hitdisLike1)

function hitDisLike2() {
  let totalDisLike2 = parseInt(countDisLike2.value) + 1
  countDisLike2.textContent = totalDisLike2.toString()
}
btnDisLike2.addEventListener("click",hitDisLike2)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment(){
  commentbox.textContent +=comment.value.toString() + "\n"
  comment.value="";
}
submit.addEventListener("click",submitComment)
