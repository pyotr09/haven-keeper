import { createAction, props } from '@ngrx/store';

export const drawMonsterAbilityCards = createAction(
  "[Tabletop] [Monster Ability Decks] Draw Monster Ability Cards",
  props<{ characterInitiatives: { [key: string]: number } }>()
);

export const drawMonsterAbilityCardsSuccess = createAction(
  "[Tabletop] [Monster Ability Decks] Draw Monster Ability Cards Success",
  props<{ characterInitiatives: { [key: string]: number }, abilityCardIds: { [key: string]: number } }>()
);

export const undoDrawMonsterAbilityCards = createAction(
  "[Tabletop] [Monster Ability Decks] Undo Draw Monster Ability Cards",
  props<{ abilityCardIds: { [key: string]: { previousId: number | null, nextId: number} } }>()
);

export const MonsterAbilityDecksActions = [
  drawMonsterAbilityCards,
  drawMonsterAbilityCardsSuccess,
  undoDrawMonsterAbilityCards
];
