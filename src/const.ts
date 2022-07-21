export const MAX_RATING = 5;
export const GUITAR_STEP = 9;

export const FIRST_INDEX_PAGINATION = 0;
export const LAST_INDEX_PAGINATION = -1;
export const STEP_PAGINATION = 1;

export const COMMENTS_STEP = 3;
export const ZERO = 0;

export enum ratingToText {
  VeryBad = 1,
  Bad = 2,
  Normal = 3,
  Good = 4,
  VeryGood = 5,
}

export enum AppRoute {
    Main = '/',
    MainFirstPage = '/page_1',
    Guitar = '/guitars/',
    NoFoundScreen = '/*',
    Characteristics = '/characteristics',
    Description = '/description',
    Lose = '/lose',
}

export enum HttpCode {
    BadRequest = 400,
    NOT_FOUND = 404,
  }

export enum NameSpace {
    GuitarsData = 'GUITARS_DATA',
    CommentsData = 'COMMENTS_DATA',
    GuitarFullData = 'GUITAR_FULL_DATA',
    ServerStatus = 'SERVER_STATUS',
    SelectedPagination = 'SELECTED_PAGINATION',
    PostUserComment = 'POST_USER_COMMENT',
    ReviewSendStatus = 'REVIEW_SEND_STATUS',
    MainSort = 'MAIN_SORT',
    MainFilter = 'MAIN_FILTER',
    MainSearch = 'MAIN_SEARCH',
  }

export enum APIRoute {
    FullGuitar = '/guitars',
    Guitars = '/guitars?_embed=comments',
    Comments = '/comments',
  }

export enum tabTranscription {
  characteristics = 'Характеристики',
  description = 'Описание',
}

export enum SortType {
  Default = 'default',
  Price = 'price',
  Rating = 'rating',
}

export enum SortOrder {
  Default = 'default',
  Up = 'asc',
  Down = 'desc',
}

export enum GuitarType {
  Acoustic = 'acoustic',
  Electric = 'electric',
  Ukulele = 'ukulele',
}

export const stringCountByType = {
  Default: ['4', '6', '7', '12'],
  Acoustic: ['6', '7', '12'],
  Electric: ['4', '6', '7'],
  Ukulele: ['4'],
};

export const disabledStringCountByType = {
  Default: [],
  Acoustic: ['4'],
  Electric: ['12'],
  Ukulele: ['6', '7', '12'],
};
