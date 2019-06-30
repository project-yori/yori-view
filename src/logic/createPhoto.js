
export default function createDummyPhoto() {

var dummyPhoto1 =  {
    "photo_group": "nogizaka46",
    "photo_member": "higuchi hina",
    "photo_costume": "2019 summer concert 1",
    "photo_type": "yori",
    "photo_number": 1,
    "photo_folder": "summer concert",
    "photo_tag": []
  }
 
  var dummyPhoto2 =  {
    "photo_group": "nogizaka46",
    "photo_member": "higuchi hina",
    "photo_costume": "2019 summer concert 1",
    "photo_type": "chu",
    "photo_number": 1,
    "photo_folder": "summer concert",
    "photo_tag": []
  }

  var dummyPhoto3 =  {
    "photo_group": "nogizaka46",
    "photo_member": "higuchi hina",
    "photo_costume": "2019 summer concert 1",
    "photo_type": "hiki",
    "photo_number": 1,
    "photo_folder": "summer concert",
    "photo_tag": []
  }

localStorage.setItem("dummyPhoto1", dummyPhoto1);
localStorage.setItem("dummyPhoto2", dummyPhoto2);
localStorage.setItem("dummyPhoto3", dummyPhoto3);

}
