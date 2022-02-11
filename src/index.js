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

  // divタグの子要素にliを設置
  div.appendChild(li);

  // 用意しているulタグの子要素にdivタグ設置
  const ul = document.getElementById("incomplete_list");
  ul.appendChild(div);
};

document.getElementById("add_btn").addEventListener("click", () => addClick());
