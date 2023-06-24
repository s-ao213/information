// チェックボックスのチェックを外す関数。HTMLファイルで設定した関数名と一致させる
function checkCLEAR()
{
   // labelがblank1〜blank6までのチェックボックスを、for文で回して全てチェックを外す。
   // 「6」は、blankの数に合わせて適宜設定
    for (i=0; i<=1000; i++) {
        // document.myTest.elements["blank"+i].checked = false;
        // var checkbox = document.getElementById("blank" + i);
        // if (checkbox) {
        //     checkbox.checked = false;
        // }
        var checkbox = document.getElementById("blank" + i);
        if (checkbox !== null && checkbox !== undefined) {
            checkbox.checked = false;
        }
    }
}

// チェックボックスのチェックをする関数。HTMLファイルで設定した関数名と一致させる
function checkALL()
{
   // labelがblank1〜blank6までのチェックボックスを、for文で回して全てチェックする。
   // 「6」は、blankの数に合わせて適宜設定
    for (i=0; i<=1000; i++) {
        // document.myTest.elements["blank"+i].checked = true;
        // var checkbox = document.getElementById("blank" + i);
        // if (checkbox) {
        //     checkbox.checked = true;
        // }
        var checkbox = document.getElementById("blank" + i);
        if (checkbox !== null && checkbox !== undefined) {
            checkbox.checked = true;
        }
    }
}

const btn2 = document.getElementById('btn2');
const btn2Text = document.getElementById('btn2-text');

btn2.addEventListener('click', () => {
  // ボタンクリックでhiddenクラスを付け外しする
    btn2Text.classList.toggle('hidden');
});
