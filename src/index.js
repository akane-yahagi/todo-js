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
    // 未完了から削除
    removeFromIncompleteList(doneBtn.parentNode);

    // 親div要素取得
    const addTarget = doneBtn.parentNode;

    // liタグ生成とテキスト取得
    const completedli = document.createElement("li");
    completedli.innerText = addTarget.firstChild.innerText;

    // 親divの中身削除
    addTarget.textContent = null;

    // ボタンの生成
    const backBtn = document.createElement("button");
    backBtn.innerText = "Back";

    // 親divに格納
    addTarget.appendChild(completedli);
    addTarget.appendChild(backBtn);

    const targetUl = document.getElementById("complete_list");
    targetUl.appendChild(addTarget);
  });

  // btn(DELETE)タグ生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "DELETE";
  deleteBtn.addEventListener("click", () => {
    // 親のdivタグをincomplete_listから削除
    removeFromIncompleteList(deleteBtn.parentNode);
  });
  // divタグの子要素に各要素を設置
  div.appendChild(li);
  div.appendChild(doneBtn);
  div.appendChild(deleteBtn);

  // 用意しているulタグの子要素にdivタグ設置
  const ul = document.getElementById("incomplete_list");
  ul.appendChild(div);
};

// 未完了リストから指定の要素を削除
const removeFromIncompleteList = (child) => {
  document.getElementById("incomplete_list").removeChild(child);
};

document.getElementById("add_btn").addEventListener("click", () => addClick());
