import { Guitar, Guitars } from '../types/guitar';
import { Comments, Comment } from '../types/comments';


export const makeFakeComment = () : Comment => (
  {
    userName: 'Vovo',
    advantage: 'шикарная',
    disadvantage: 'донная',
    comment: 'ни рыба ни мясо',
    rating: 4,
    id: 'sadsada',
    createAt: 'Thu, 09 Jun 2022 19:48:39 GMT' ,
    guitarId: 2,
  }
);

export const makeFakeComments = () : Comments => (
  [
    {
      userName: 'Vovo',
      advantage: 'шикарная',
      disadvantage: 'донная',
      comment: 'ни рыба ни мясо',
      rating: 4,
      id: 'sadsada',
      createAt: 'Thu, 09 Jun 2022 19:48:39 GMT' ,
      guitarId: 2,
    },
    {
      userName: 'Vovouchka',
      advantage: 'шикарная',
      disadvantage: 'донная',
      comment: 'ни рыба ни мясо по сути',
      rating: 2,
      id: 'sadsada',
      createAt: 'Thu, 09 Jun 2022 19:48:39 GMT' ,
      guitarId: 3,
    },
  ]
);

export const makeFakeGuitar = (): Guitar => (
  {
    id: 1,
    name: 'sadasd',
    vendorCode: 'asdasd',
    type: 'electric',
    description: 'strinsdsadg',
    previewImg: 'url/img-1.jpg',
    stringCount: 6,
    rating: 2,
    price: 17800,
    comments:  makeFakeComments(),
  }
);

export const makeFakeGuitars = (): Guitars => (
  [
    {
      id: 1,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 2,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 3,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 4,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 5,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 6,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 7,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 8,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 9,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 10,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 11,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 12,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 13,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 14,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 15,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 16,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 17,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 18,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
    {
      id: 19,
      name: 'sadasd',
      vendorCode: 'asdasd',
      type: 'electric',
      description: 'strinsdsadg',
      previewImg: 'url/img-1.jpg',
      stringCount: 6,
      rating: 2,
      price: 17800,
      comments:  makeFakeComments(),
    },
  ]
);


export const makeFakeModalProps = (active: boolean, modalTypeActive: boolean, guitar: Guitar) => (
  {
    active: false,
    modalTypeActive: false,
    guitar: makeFakeGuitar(),
  }
);
