import avatars from "../assets";

const characters = [
  { name: "Hambi", avatar: avatars.hambi, sounds: [] },
  {
    name: "Mamic",
    avatar: avatars.mamic,
    sounds: [
      { title: "Djubre", fileName: "mamic_djubre" },
      { title: "Nabijem te na kurac", fileName: "mamic_nabijem" },
      { title: "Nemas to pravo", fileName: "mamic_nemas_to_pravo" },
      { title: "Proklet bio", fileName: "mamic_proklet_bio" },
      { title: "Rasturite me", fileName: "mamic_rasturite_me" },
      { title: "Smece podmuklo", fileName: "mamic_smece_podmuklo" },
      { title: "Mucki provokator", fileName: "mamic_provokator" },
      { title: "Lazov", fileName: "mamic_lazov" },
    ],
  },
  { name: "Vuco", avatar: avatars.vuco, sounds: [] },
  { name: "Zorz", avatar: avatars.zorz, sounds: [] },
];

export default characters;
