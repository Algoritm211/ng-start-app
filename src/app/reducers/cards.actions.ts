import { Action } from "@ngrx/store"


export const DELETE_CARD = '[Card] Delete'

export class DeleteCard implements Action {
  readonly type = DELETE_CARD
  constructor(public id: string) { }
}

export type All = DeleteCard
