import "./styles.css";

const addClick = () => {
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = null;

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list_row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // btn(DONE)タグ生成
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "DONE";
  doneBtn.addEventListener("click", () => {
    alert("DONE");
  });

  // btn(DELETE)タグ生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "DELETE";
  deleteBtn.addEventListener("click", () => {
    alert("DELETE");
  });
  // divタグの子要素に各要素を設置
  div.appendChild(li);
  div.appendChild(doneBtn);
  div.appendChild(deleteBtn);

  // 用意しているulタグの子要素にdivタグ設置
  const ul = document.getElementById("incomplete_list");
  ul.appendChild(div);
};

document.getElementById("add_btn").addEventListener("click", () => addClick());
