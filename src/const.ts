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
    Catalog = 'catalog/',
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


