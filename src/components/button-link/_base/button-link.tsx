import { match } from 'ts-pattern';

import {
  GhostButtonLink,
  type GhostButtonLinkProps,
  NormalButtonLink,
  type NormalButtonLinkProps,
} from './_variant';

type ButtonLinkVariant = 'ghost' | 'normal';

export type ButtonLinkProps<R, T extends ButtonLinkVariant> = T extends 'ghost'
  ? GhostButtonLinkProps<R> & { variant: T }
  : T extends 'normal'
    ? NormalButtonLinkProps<R> & { variant: T }
    : never;

export const ButtonLink = <R, T extends ButtonLinkVariant>(props: ButtonLinkProps<R, T>) => {
  return match(props.variant)
    .with('ghost', () => <GhostButtonLink {...props} />)
    .with('normal', () => <NormalButtonLink {...props} />)
    .exhaustive();
};
