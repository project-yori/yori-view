import { createPhoto } from "../../services/apis/createPhoto";
import { expect } from "chai";

const group = "keyakizaka";
const costume = "2019_july_2_yukata";

const rngGen = () => {
  return Math.ceil(Math.random() * 20);
};
const rng = {
  mem1_type1: rngGen(),
  mem1_type2: rngGen(),
  mem2_type1: rngGen(),
  mem2_type2: rngGen(),
  mem3_type1: rngGen(),
  mem3_type2: rngGen()
};
rng.total =
  rng.mem1_type1 +
  rng.mem1_type2 +
  rng.mem2_type1 +
  rng.mem2_type2 +
  rng.mem3_type1 +
  rng.mem3_type2;

const member = {
  sugai_yuuka: {
    photoTypeNumber: {
      yori: rng.mem1_type1,
      chu: 0,
      hiki: rng.mem1_type2,
      suwari: 0
    }
  },
  moriya_akane: {
    photoTypeNumber: {
      yori: rng.mem2_type1,
      chu: rng.mem2_type2,
      hiki: 0,
      suwari: 0
    }
  },
  yamasaki_ten: {
    photoTypeNumber: {
      yori: 0,
      chu: rng.mem3_type1,
      hiki: rng.mem3_type2,
      suwari: 0
    }
  }
};

const payload = createPhoto(group, costume, member);

it("should contains same amount of photo instances of all photos", () => {
  expect(payload.length).to.equal(rng.total);
});

it("should have correct properties in every photo instances", () => {
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_group");
    }).length
  ).to.equal(rng.total);
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_costume");
    }).length
  ).to.equal(rng.total);
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_member");
    }).length
  ).to.equal(rng.total);
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_type");
    }).length
  ).to.equal(rng.total);
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_folder");
    }).length
  ).to.equal(rng.total);
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_create_time");
    }).length
  ).to.equal(rng.total);
});

it("should generate all photo instances with designated group", () => {
  expect(
    payload.filter(item => {
      return item.photo_group === "keyakizaka";
    }).length
  ).to.equal(rng.total);
});

it("should generate all photo instances with designated costume", () => {
  expect(
    payload.filter(item => {
      return item.photo_costume === "2019_july_2_yukata";
    }).length
  ).to.equal(rng.total);
});

it("should generate same amount of photo instances of each member's photos", () => {
  expect(
    payload.filter(item => {
      return item.photo_member === "sugai_yuuka";
    }).length
  ).to.equal(rng.mem1_type1 + rng.mem1_type2);
  expect(
    payload.filter(item => {
      return item.photo_member === "moriya_akane";
    }).length
  ).to.equal(rng.mem2_type1 + rng.mem2_type2);
  expect(
    payload.filter(item => {
      return item.photo_member === "yamasaki_ten";
    }).length
  ).to.equal(rng.mem3_type1 + rng.mem3_type2);
});

it("should generate same amount of photo instances of each type of each member", () => {
  expect(
    payload.filter(item => {
      return item.photo_member === "sugai_yuuka" && item.photo_type === "yori";
    }).length
  ).to.equal(rng.mem1_type1);
  expect(
    payload.filter(item => {
      return item.photo_member === "sugai_yuuka" && item.photo_type === "hiki";
    }).length
  ).to.equal(rng.mem1_type2);
  expect(
    payload.filter(item => {
      return item.photo_member === "moriya_akane" && item.photo_type === "yori";
    }).length
  ).to.equal(rng.mem2_type1);
  expect(
    payload.filter(item => {
      return item.photo_member === "moriya_akane" && item.photo_type === "chu";
    }).length
  ).to.equal(rng.mem2_type2);
  expect(
    payload.filter(item => {
      return item.photo_member === "yamasaki_ten" && item.photo_type === "chu";
    }).length
  ).to.equal(rng.mem3_type1);
  expect(
    payload.filter(item => {
      return item.photo_member === "yamasaki_ten" && item.photo_type === "hiki";
    }).length
  ).to.equal(rng.mem3_type2);
});
