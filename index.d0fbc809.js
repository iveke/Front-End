async function t(){return(await fetch("http://localhost:1532/comments")).json()}async function e(){return(await fetch("http://localhost:1532/posts")).json()}async function n(t){const e={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)},n=await fetch("http://localhost:1532/comments",e);return console.log(n.json())}async function o(t,e){const n={method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)},o=await fetch(`http://localhost:1532/posts/${e}`,n),c=await o.json();return await c}async function c(t){await fetch(`http://localhost:1532/posts/${t}`,{method:"DELETE"})}async function a(){r.comments.innerHTML="";const e=await t(),n=[];e.forEach((t=>{const e=`<div class="card comment text-center">\n        <div class="card-header">\n            Comment${t.id}\n        </div>\n        <div class="card-body">\n            <p class="card-text">${t.body}</p>\n        </div>\n    </div>`;n.push(e)})),r.comments.insertAdjacentHTML("beforeend",n.join(""))}let s;async function i(t){t.preventDefault();const e={title:`${r.title.value}`,body:`${r.body.value}`},n=await o(e,s),c=document.getElementById(`${n.id}`),a=c.querySelector(".card-title"),i=c.querySelector(".card-text");a.textContent=`${n.title}`,i.textContent=`${n.body}`}const r={form:document.getElementById("form"),cards:document.querySelector(".cards"),title:document.getElementById("title"),body:document.getElementById("body"),save:document.getElementById("save"),comments:document.querySelector(".comments")};r.cards.addEventListener("click",(async function(t){if(!t.target.classList.contains("btn-danger"))return;const e=t.target.parentElement.parentElement;c(e.id),e.remove()})),r.cards.addEventListener("click",(function(t){if(!t.target.classList.contains("btn-success"))return;const e=t.target.parentElement,n={title:e.querySelector(".card-title").textContent,text:e.querySelector(".card-text").textContent};r.title.value=n.title,r.body.value=n.text,console.log(s),s=e.parentElement.id,console.log(s),r.save.addEventListener("click",i)})),r.form.addEventListener("submit",(function(t){t.preventDefault(),n({body:`${new FormData(r.form).get("comment")}`}),a(),t.target.reset()})),async function(){r.cards.innerHTML="";const t=await e(),n=[];t.forEach((t=>{const e=`<li id="${t.id}" class="card" style="width: 20rem;">\n        <div class="card-body">\n            <h5 class="card-title">${t.title}</h5>\n            <p class="card-text">${t.body}</p>\n            <button type="button" class="btn btn-danger">Delete</button>\n            <button type="button" style="margin-top:10px" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Update</button>\n        </div>\n    </li>`;n.push(e)})),r.cards.insertAdjacentHTML("beforeend",n.join(""))}(),a();
//# sourceMappingURL=index.d0fbc809.js.map
