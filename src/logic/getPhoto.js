
export default function getDummyPhoto(photoName) {
    var dummyPhoto1 =  {
        "photo_group": "乃木坂46",
        "photo_member": "樋口日奈",
        "photo_costume": "2019 summer concert 1",
        "photo_type": "ヨリ",
        "photo_number": 1,
        "photo_folder": "summer concert",
        "photo_tag": []
      }

      var dummyPhoto2 =  {
        "photo_group": "乃木坂46",
        "photo_member": "樋口日奈",
        "photo_costume": "2019 summer concert 1",
        "photo_type": "チュウ",
        "photo_number": 3,
        "photo_folder": "summer concert",
        "photo_tag": []
      }

      var dummyPhoto3 =  {
        "photo_group": "乃木坂46",
        "photo_member": "樋口日奈",
        "photo_costume": "2019 summer concert 1",
        "photo_type": "ヒキ",
        "photo_number": 1,
        "photo_folder": "summer concert",
        "photo_tag": []
      }

      var dummyPhoto4 =  {
        "photo_group": "欅坂46",
        "photo_member": "守屋茜",
        "photo_costume": "春の私服",
        "photo_type": "ヒキ",
        "photo_number": 9,
        "photo_folder": "けやき",
        "photo_tag": []
      }

      var dummyPhoto5 =  {
        "photo_group": "欅坂46",
        "photo_member": "守屋茜",
        "photo_costume": "春の私服",
        "photo_type": "チュウ",
        "photo_number": 112,
        "photo_folder": "けやき",
        "photo_tag": []
      }

      var dummyPhoto6 =  {
        "photo_group": "日向坂46",
        "photo_member": "齋藤京子",
        "photo_costume": "クリスマス2018",
        "photo_type": "ヨリ",
        "photo_number": 11,
        "photo_folder": "クリスマス",
        "photo_tag": []
      }

      var dummyPhoto7 =  {
        "photo_group": "乃木坂46",
        "photo_member": "白石麻衣",
        "photo_costume": "キャジュアル",
        "photo_type": "ヨリ",
        "photo_number": 5,
        "photo_folder": "乃木坂",
        "photo_tag": []
      }

      var dummyPhoto8 =  {
        "photo_group": "欅坂46",
        "photo_member": "渡辺梨加",
        "photo_costume": "アンビバレント",
        "photo_type": "ヒキ",
        "photo_number": 2,
        "photo_folder": "DEFAULT",
        "photo_tag": []
      }

      var dummyPhoto9 =  {
        "photo_group": "日向坂46",
        "photo_member": "小坂菜緒",
        "photo_costume": "クリスマス2019",
        "photo_type": "ヨリ",
        "photo_number": 1,
        "photo_folder": "DEFAULT",
        "photo_tag": []
      }

      var dummyPhoto10 = {
        "photo_group": "乃木坂46",
        "photo_member": "筒井あやめ",
        "photo_costume": "日常",
        "photo_type": "ヨリ",
        "photo_number": 3,
        "photo_folder": "乃木坂",
        "photo_tag": []
      }

      var dummyPhoto11 = {
        "photo_group": "乃木坂46",
        "photo_member": "吉田綾乃クリスティー",
        "photo_costume": "日常",
        "photo_type": "ヨリ",
        "photo_number": 2000,
        "photo_folder": "乃木坂",
        "photo_tag": []
      }

    localStorage.setItem("dummyPhoto1", JSON.stringify(dummyPhoto1));
    localStorage.setItem("dummyPhoto2", JSON.stringify(dummyPhoto2));
    localStorage.setItem("dummyPhoto3", JSON.stringify(dummyPhoto3));
    localStorage.setItem("dummyPhoto4", JSON.stringify(dummyPhoto4));
    localStorage.setItem("dummyPhoto5", JSON.stringify(dummyPhoto5));
    localStorage.setItem("dummyPhoto6", JSON.stringify(dummyPhoto6));
    localStorage.setItem("dummyPhoto7", JSON.stringify(dummyPhoto7));
    localStorage.setItem("dummyPhoto8", JSON.stringify(dummyPhoto8));
    localStorage.setItem("dummyPhoto9", JSON.stringify(dummyPhoto9));
    localStorage.setItem("dummyPhoto10", JSON.stringify(dummyPhoto10));
    localStorage.setItem("dummyPhoto11", JSON.stringify(dummyPhoto11));

    const photoData = localStorage.getItem(photoName);
    return JSON.parse(photoData);
}
