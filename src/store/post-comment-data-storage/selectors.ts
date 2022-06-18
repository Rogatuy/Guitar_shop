import { NameSpace } from '../../const';
import { Comments } from '../../types/comments';
import { State } from '../../types/state';


export const getPostComments = (state: State) : Comments => state[NameSpace.PostUserComment].userComments;
