const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLike1 = document.getElementById("countLike1")
const countLike2 = document.getElementById("countLike2")

const btndisLike1 = document.getElementById("btndisLike1")
const btndisLike2 = document.getElementById("btndisLike2")
const countdisLike1 = document.getElementById("countdisLike1")
const countdisLike2 = document.getElementById("countdisLike2")

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
  let totaldisLike1 = parseInt(countdisLike1.value) + 1
  countdisLike1.textContent = totaldisLike1.toString()
}
btndisLike1.addEventListener("click",hitdisLike1)

function hitdisLike2() {
  let totaldisLike2 = parseInt(countdisLike2.value) + 1
  countdisLikes2.textContent = totaldisLike2.toString()
}
btndisLike2.addEventListener("click",hitdisLike2)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment(){
  commentbox.textContent +=comment.value.toString() + "\n"
  comment.value="";
}
submit.addEventListener("click",submitComment)
