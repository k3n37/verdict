export interface QualityLayer {
  layer: 'unit' | 'integration' | 'contract' | 'e2e';
  focus: string;
  owner: string;
}

export const qualityMatrix: QualityLayer[] = [
  { layer: 'unit', focus: 'core domain logic', owner: 'service teams' },
  { layer: 'integration', focus: 'runtime dependencies', owner: 'platform + service teams' },
  { layer: 'contract', focus: 'API compatibility', owner: 'platform teams' },
  { layer: 'e2e', focus: 'critical product journeys', owner: 'product engineering' },
];
