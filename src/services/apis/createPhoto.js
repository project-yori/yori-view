export const createPhoto = (group, costume, members, folder = "all") => {
  let payload = [];
  const create_time = new Date().toLocaleString();
  Object.entries(members).forEach(([member, data]) => {
    Object.entries(data.photoTypeNumber).forEach(([type, number]) => {
      const newPhoto = {
        photo_group: group,
        photo_costume: costume,
        photo_member: member,
        photo_type: type,
        photo_folder: folder,
        photo_create_time: create_time
      };
      for (let photoGenerated = 0; photoGenerated < number; photoGenerated++) {
        payload.push({ ...newPhoto });
      }
    });
  });
  return payload;
};
