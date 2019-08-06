import { createPhoto } from "../../services/apis/createPhoto";
import { expect } from "chai";

const group = "keyakizaka";
const costume = "2019_july_2_yukata";
const member = {
  sugai_yuuka: {
    photoTypeNumber: {
      yori: 2,
      chu: 0,
      hiki: 1,
      suwari: 0
    }
  },
  moriya_akane: {
    photoTypeNumber: {
      yori: 0,
      chu: 5,
      hiki: 0,
      suwari: 0
    }
  },
  yamasaki_ten: {
    photoTypeNumber: {
      yori: 0,
      chu: 1,
      hiki: 0,
      suwari: 0
    }
  }
};

const payload = createPhoto(group, costume, member);

it("should contains same amount of photo instances of all photos", () => {
  expect(payload.length).to.equal(2 + 1 + 5 + 1);
});

it("should have correct properties in every photo instances", () => {
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_group");
    }).length
  ).to.equal(2 + 1 + 5 + 1);
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_costume");
    }).length
  ).to.equal(2 + 1 + 5 + 1);
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_member");
    }).length
  ).to.equal(2 + 1 + 5 + 1);
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_type");
    }).length
  ).to.equal(2 + 1 + 5 + 1);
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_folder");
    }).length
  ).to.equal(2 + 1 + 5 + 1);
  expect(
    payload.filter(item => {
      return item.hasOwnProperty("photo_create_time");
    }).length
  ).to.equal(2 + 1 + 5 + 1);
});

it("should generate all photo instances with designated group", () => {
  expect(
    payload.filter(item => {
      return item.photo_group === "keyakizaka";
    }).length
  ).to.equal(2 + 1 + 5 + 1);
});

it("should generate all photo instances with designated costume", () => {
  expect(
    payload.filter(item => {
      return item.photo_costume === "2019_july_2_yukata";
    }).length
  ).to.equal(2 + 1 + 5 + 1);
});

it("should generate same amount of photo instances of each member's photos", () => {
  expect(
    payload.filter(item => {
      return item.photo_member === "sugai_yuuka";
    }).length
  ).to.equal(2 + 1);
  expect(
    payload.filter(item => {
      return item.photo_member === "moriya_akane";
    }).length
  ).to.equal(5);
  expect(
    payload.filter(item => {
      return item.photo_member === "yamasaki_ten";
    }).length
  ).to.equal(1);
});

it("should generate same amount of photo instances of each type of each member", () => {
  expect(
    payload.filter(item => {
      return item.photo_member === "sugai_yuuka" && item.photo_type === "yori";
    }).length
  ).to.equal(2);
  expect(
    payload.filter(item => {
      return item.photo_member === "sugai_yuuka" && item.photo_type === "hiki";
    }).length
  ).to.equal(1);
  expect(
    payload.filter(item => {
      return item.photo_member === "moriya_akane" && item.photo_type === "chu";
    }).length
  ).to.equal(5);
  expect(
    payload.filter(item => {
      return item.photo_member === "yamasaki_ten" && item.photo_type === "chu";
    }).length
  ).to.equal(1);
});
