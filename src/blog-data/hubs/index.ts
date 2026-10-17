import type { HubContent } from './types';
import { biorevitalizationHub } from './biorevitalization';
import { botoxHub } from './botox';
import { dermatologistHub } from './dermatologist';
import { fillersHub } from './fillers';
import { lipsHub } from './lips';
import { mesotherapyHub } from './mesotherapy';

export const HUB_CONTENT: Record<string, HubContent> = Object.fromEntries(
  [dermatologistHub, botoxHub, mesotherapyHub, biorevitalizationHub, fillersHub, lipsHub].map((h) => [h.clusterId, h]),
);
