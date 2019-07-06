import React from 'react'
import PhotoItem from '../../src/components/PhotoItem';
import renderer from 'react-test-renderer';

test('Render meta of photo of extra long member name', () => {
  const photo = {
    photo_group: '乃木坂46',
    photo_member: '吉田綾乃クリスティー',
    photo_costume: '日常',
    photo_type: 'ヨリ',
    photo_number: 20,
    photo_folder: '乃木坂',
    photo_tag: []
  };

  const component = renderer.create(
    <PhotoItem photo={photo} key={`photo-item-${0}`}/>,
  );
  const instance = component.root;
  expect(instance.findByProps({className: 'photo-name extra-small-text'})).toBeTruthy();

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
