export type courses = {
  id: number;
  title: string;
  price: string;
  img: string;
  quantity: number;
};
const courseItems: courses[] = [
  {
    id: 1,
    title: "C Programlama Eğitimi",
    price: "69",
    img: "src/images/photo1.jpg",
    quantity: 1,
  },
  {
    id: 2,
    title: "C# Eğitimi",
    price: "75",
    img: "src/images/photo2.jpg",
    quantity: 1,
  },
  {
    id: 3,
    title: "Typescript Eğitimi",
    price: "88",
    img: "src/images/photo3.jpg",
    quantity: 1,
  },
  {
    id: 4,
    title: "React Eğitimi",
    price: "125 ",
    img: "src/images/photo4.jpg",
    quantity: 1,
  },
];

export default courseItems;
