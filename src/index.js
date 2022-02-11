import "./styles.css";

const addClick = () => {
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = null;

  createIncompleteList(inputText);
};

// 指定のリストから指定の要素を削除
const removeFromList = (target, child) => {
  document.getElementById(target).removeChild(child);
};

// 未完了リストに指定の要素を格納
const storeToIncompleteList = (child) => {
  const ul = document.getElementById("incomplete_list");
  ul.appendChild(child);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list_row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // btn(DONE)タグ生成
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "DONE";
  doneBtn.addEventListener("click", () => {
    // 未完了から削除
    removeFromList("incomplete_list", doneBtn.parentNode);

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

    backBtn.addEventListener("click", () => {
      const removeTag = backBtn.parentNode;
      removeFromList("complete_list", removeTag);

      const tagetText = removeTag.firstChild.innerText;
      createIncompleteList(tagetText);
    });

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
    removeFromList("incomplete_list", deleteBtn.parentNode);
  });
  // divタグの子要素に各要素を設置
  div.appendChild(li);
  div.appendChild(doneBtn);
  div.appendChild(deleteBtn);

  // 用意しているulタグの子要素にdivタグ設置
  storeToIncompleteList(div);
};

document.getElementById("add_btn").addEventListener("click", () => addClick());
